#!/usr/bin/env bats

setup() {
    load test_helper
    setup_mock_bin
}

expected_plugins() {
    grep -vE '^\s*(#|$)' "$DOTFILES_REPO_DIR/claude/plugins.txt"
}

@test "claude-plugins.sh fails when claude CLI is missing" {
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/install/claude-plugins.sh"
    [ "$status" -eq 1 ]
    [[ "$output" == *"claude CLI not found"* ]]
}

@test "claude-plugins.sh installs each listed plugin at user scope" {
    mock_cmd claude 0
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/install/claude-plugins.sh"
    [ "$status" -eq 0 ]

    expected="$(echo "plugin marketplace update claude-plugins-official"
        expected_plugins | sed 's/^/plugin install /; s/$/ --scope user/')"
    [ "$(mock_calls claude)" = "$expected" ]
}

@test "claude-plugins.sh keeps going when one install fails" {
    mock_cmd claude 1
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/install/claude-plugins.sh"
    [ "$status" -eq 0 ]
    [ "$(mock_call_count claude)" -eq $(( $(expected_plugins | wc -l) + 1 )) ]
}

@test "uninstall/claude-plugins.sh uninstalls each listed plugin" {
    mock_cmd claude 0
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/uninstall/claude-plugins.sh"
    [ "$status" -eq 0 ]

    expected="$(expected_plugins | sed 's/^/plugin uninstall /; s/$/ --scope user/')"
    [ "$(mock_calls claude)" = "$expected" ]
}
