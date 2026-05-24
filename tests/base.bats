#!/usr/bin/env bats

setup() {
    load test_helper
    setup_mock_bin
    # shellcheck disable=SC1090
    source "$DOTFILES_REPO_DIR/install/_base.sh"
}

@test "_base.sh exports DOTFILES_DIR pointing to repo root" {
    [ "$DOTFILES_DIR" = "$DOTFILES_REPO_DIR" ]
    [ -d "$DOTFILES_DIR/install" ]
    [ -d "$DOTFILES_DIR/uninstall" ]
}

@test "check_apple_silicon succeeds when uname reports arm64" {
    mock_cmd uname 0
    cat > "$MOCK_BIN_DIR/uname" <<'EOF'
#!/bin/bash
echo arm64
EOF
    chmod +x "$MOCK_BIN_DIR/uname"
    run check_apple_silicon
    [ "$status" -eq 0 ]
    [[ "$output" == *"Apple Silicon confirmed"* ]]
}

@test "check_apple_silicon fails when uname reports x86_64" {
    cat > "$MOCK_BIN_DIR/uname" <<'EOF'
#!/bin/bash
echo x86_64
EOF
    chmod +x "$MOCK_BIN_DIR/uname"
    run check_apple_silicon
    [ "$status" -eq 1 ]
    [[ "$output" == *"Only Apple Silicon"* ]]
}

@test "install_brewfile warns and returns 0 when file missing" {
    run install_brewfile "$BATS_TEST_TMPDIR/nope.Brewfile" "ghost"
    [ "$status" -eq 0 ]
    [[ "$output" == *"Brewfile not found"* ]]
}

@test "install_brewfile invokes brew bundle with --file" {
    mock_cmd brew 0
    local bf="$BATS_TEST_TMPDIR/Brewfile.test"
    echo 'brew "ripgrep"' > "$bf"
    run install_brewfile "$bf" "test pkgs"
    [ "$status" -eq 0 ]
    [[ "$output" == *"Installing test pkgs"* ]]
    [[ "$output" == *"test pkgs installed"* ]]
    run mock_calls brew
    [ "$output" = "bundle --file=$bf" ]
}

@test "install_brewfile propagates brew failure under set -e" {
    mock_cmd brew 1
    local bf="$BATS_TEST_TMPDIR/Brewfile.fail"
    echo 'brew "ripgrep"' > "$bf"
    # Real install scripts source _base.sh under `set -e`; replicate that here.
    run bash -c "set -e; source '$DOTFILES_REPO_DIR/install/_base.sh'; install_brewfile '$bf' 'fail pkgs'"
    [ "$status" -ne 0 ]
}
