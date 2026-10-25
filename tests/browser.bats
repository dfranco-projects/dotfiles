#!/usr/bin/env bats

setup() {
    load test_helper
    setup_mock_bin
    mock_cmd brew 0
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
}

# claude mock whose `mcp get` exits with $1 (0 = crest already registered).
mock_claude() {
    local get_status="$1"
    local log_file="$BATS_TEST_TMPDIR/claude.calls"
    cat > "$MOCK_BIN_DIR/claude" <<EOF
#!/bin/bash
printf '%s\n' "\$*" >> "$log_file"
[[ "\$1 \$2" == "mcp get" ]] && exit $get_status
exit 0
EOF
    chmod +x "$MOCK_BIN_DIR/claude"
}

@test "browser.sh defaults to crest and installs only its Brewfile" {
    mock_claude 1
    run bash "$DOTFILES_REPO_DIR/install/browser.sh"
    [ "$status" -eq 0 ]
    [ "$(mock_calls brew)" = "bundle --file=$DOTFILES_REPO_DIR/brews/Brewfile.browser-crest" ]
}

@test "browser.sh crest registers the Crest MCP server at user scope" {
    mock_claude 1
    run bash "$DOTFILES_REPO_DIR/install/browser.sh" crest
    [ "$status" -eq 0 ]
    [[ "$(mock_calls claude)" == *"mcp add --scope user --transport stdio crest -- /Applications/Crest.app/Contents/Helpers/crest-browser mcp"* ]]
}

@test "browser.sh crest skips registration when the MCP server exists" {
    mock_claude 0
    run bash "$DOTFILES_REPO_DIR/install/browser.sh" crest
    [ "$status" -eq 0 ]
    [[ "$(mock_calls claude)" != *"mcp add"* ]]
}

@test "browser.sh crest warns and succeeds without the claude CLI" {
    run bash "$DOTFILES_REPO_DIR/install/browser.sh" crest
    [ "$status" -eq 0 ]
    [[ "$output" == *"Claude Code CLI not found"* ]]
}

@test "browser.sh zen installs only the Zen Brewfile" {
    mock_claude 1
    run bash "$DOTFILES_REPO_DIR/install/browser.sh" zen
    [ "$status" -eq 0 ]
    [ "$(mock_calls brew)" = "bundle --file=$DOTFILES_REPO_DIR/brews/Brewfile.browser-zen" ]
    [ -z "$(mock_calls claude)" ]
}

@test "browser.sh rejects an unknown browser" {
    run bash "$DOTFILES_REPO_DIR/install/browser.sh" arc
    [ "$status" -eq 1 ]
    [[ "$output" == *"Unknown browser: arc"* ]]
}

@test "uninstall/browser.sh crest removes the MCP server and the cask" {
    mock_claude 0
    run bash "$DOTFILES_REPO_DIR/uninstall/browser.sh" crest
    [ "$status" -eq 0 ]
    [[ "$(mock_calls claude)" == *"mcp remove crest -s user"* ]]
    [[ "$(mock_calls brew)" == *"uninstall --cask crest-browser"* ]]
}
