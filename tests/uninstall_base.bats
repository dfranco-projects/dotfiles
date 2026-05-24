#!/usr/bin/env bats

setup() {
    load test_helper
    setup_mock_bin
    # shellcheck disable=SC1090
    source "$DOTFILES_REPO_DIR/uninstall/_base.sh"
}

@test "uninstall_brewfile warns when file missing" {
    run uninstall_brewfile "$BATS_TEST_TMPDIR/nope.Brewfile" "ghost"
    [ "$status" -eq 0 ]
    [[ "$output" == *"Brewfile not found"* ]]
}

@test "uninstall_brewfile warns when Brewfile is empty" {
    local bf="$BATS_TEST_TMPDIR/Brewfile.empty"
    : > "$bf"
    run uninstall_brewfile "$bf" "empty"
    [ "$status" -eq 0 ]
    [[ "$output" == *"No packages found"* ]]
}

@test "uninstall_brewfile parses brew and cask names and calls brew uninstall" {
    # brew is invoked many ways: `brew list X`, `brew uninstall --cask X`, `brew uninstall X`.
    # Use a smarter mock that returns 0 for `list` (so all packages look installed)
    # and records uninstall calls.
    cat > "$MOCK_BIN_DIR/brew" <<'EOF'
#!/bin/bash
log_file="$MOCK_LOG"
case "$1" in
    list) exit 0 ;;
    uninstall)
        printf '%s\n' "$*" >> "$log_file"
        exit 0
        ;;
esac
exit 0
EOF
    chmod +x "$MOCK_BIN_DIR/brew"
    export MOCK_LOG="$BATS_TEST_TMPDIR/brew.calls"

    local bf="$BATS_TEST_TMPDIR/Brewfile.mix"
    cat > "$bf" <<'EOF'
# a comment
brew "ripgrep"
brew "fd"
cask "wezterm"
EOF

    run uninstall_brewfile "$bf" "mix"
    [ "$status" -eq 0 ]
    # Each package should appear in at least one brew uninstall call.
    grep -q "ripgrep" "$MOCK_LOG"
    grep -q "fd" "$MOCK_LOG"
    grep -q "wezterm" "$MOCK_LOG"
}

@test "uninstall_brewfile skips packages that are not installed" {
    cat > "$MOCK_BIN_DIR/brew" <<'EOF'
#!/bin/bash
log_file="$MOCK_LOG"
case "$1" in
    list) exit 1 ;;
    uninstall)
        printf '%s\n' "$*" >> "$log_file"
        exit 0
        ;;
esac
exit 0
EOF
    chmod +x "$MOCK_BIN_DIR/brew"
    export MOCK_LOG="$BATS_TEST_TMPDIR/brew.calls"

    local bf="$BATS_TEST_TMPDIR/Brewfile.notinstalled"
    echo 'brew "ripgrep"' > "$bf"

    run uninstall_brewfile "$bf" "absent"
    [ "$status" -eq 0 ]
    [ ! -f "$MOCK_LOG" ]
    [[ "$output" == *"not installed"* ]]
}
