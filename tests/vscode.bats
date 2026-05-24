#!/usr/bin/env bats

setup() {
    load test_helper
    setup_mock_bin
}

@test "extensions.txt lives under stow/.config/vscode/ (not .config/vscode/)" {
    [ -f "$DOTFILES_REPO_DIR/stow/.config/vscode/extensions.txt" ]
    [ ! -f "$DOTFILES_REPO_DIR/.config/vscode/extensions.txt" ]
}

@test "vscode.sh references EXTENSIONS_FILE under stow/" {
    run grep -E '^EXTENSIONS_FILE=' "$DOTFILES_REPO_DIR/install/vscode.sh"
    [ "$status" -eq 0 ]
    [[ "$output" == *"stow/.config/vscode/extensions.txt"* ]]
}

@test "vscode.sh warns and exits 0 when code CLI is missing" {
    # Isolate PATH to /usr/bin:/bin (no `code`, but `tput` etc. still work).
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/install/vscode.sh"
    [ "$status" -eq 0 ]
    [[ "$output" == *"VS Code CLI not found"* ]]
}

@test "vscode.sh invokes code --install-extension for each non-comment line" {
    mock_cmd code 0
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/install/vscode.sh"
    [ "$status" -eq 0 ]

    # Compare invocations against the actual extensions.txt (ignoring blanks/comments).
    expected="$(grep -vE '^\s*(#|$)' "$DOTFILES_REPO_DIR/stow/.config/vscode/extensions.txt" \
        | sed 's/^/--install-extension /' \
        | sed 's/$/ --force/')"
    actual="$(mock_calls code)"
    [ -n "$actual" ]
    [ "$actual" = "$expected" ]
}
