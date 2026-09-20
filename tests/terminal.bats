#!/usr/bin/env bats

setup() {
    load test_helper
}

@test "make theme-list lists the themes under stow/" {
    run make -C "$DOTFILES_REPO_DIR" theme-list
    [ "$status" -eq 0 ]
    [[ "$output" != *"no themes found"* ]]
    [[ "$output" == *"blurred"* ]]
}

@test "uninstall/terminal.sh restores a theme that exists" {
    run grep -E '^DEFAULT_THEME=' "$DOTFILES_REPO_DIR/uninstall/terminal.sh"
    [ "$status" -eq 0 ]

    local theme
    theme="$(echo "$output" | sed 's/.*="\(.*\)"/\1/')"
    [ -f "$DOTFILES_REPO_DIR/stow/.config/wezterm/themes/$theme/wezterm.lua" ]
}
