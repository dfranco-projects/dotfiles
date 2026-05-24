#!/usr/bin/env bats

setup() {
    load test_helper
    setup_mock_bin
}

@test "install/dotfiles.sh invokes stow with --adopt -t ~ -d . stow" {
    mock_cmd stow 0
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/install/dotfiles.sh"
    [ "$status" -eq 0 ]
    calls="$(mock_calls stow)"
    [ -n "$calls" ]
    [[ "$calls" == *"--adopt"* ]]
    [[ "$calls" == *"-t"* ]]
    [[ "$calls" == *"-d"* ]]
    [[ "$calls" == *"stow" ]]
}

@test "uninstall/dotfiles.sh invokes stow with --delete -t ~ -d . stow" {
    mock_cmd stow 0
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    run bash "$DOTFILES_REPO_DIR/uninstall/dotfiles.sh"
    [ "$status" -eq 0 ]
    calls="$(mock_calls stow)"
    [ -n "$calls" ]
    [[ "$calls" == *"--delete"* ]]
    [[ "$calls" == *"-t"* ]]
    [[ "$calls" == *"-d"* ]]
    [[ "$calls" == *"stow" ]]
}

@test "install and uninstall use the same stow package name" {
    install_cmd="$(grep -E '^stow' "$DOTFILES_REPO_DIR/install/dotfiles.sh")"
    uninstall_cmd="$(grep -E '^stow' "$DOTFILES_REPO_DIR/uninstall/dotfiles.sh")"
    # Both should end with the package name `stow` and use `-d .` to anchor
    # the stow directory at DOTFILES_DIR.
    [[ "$install_cmd" == *"-d . stow"* ]]
    [[ "$uninstall_cmd" == *"-d . stow"* ]]
}
