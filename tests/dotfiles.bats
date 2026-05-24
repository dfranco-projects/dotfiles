#!/usr/bin/env bats

setup() {
    load test_helper
    setup_mock_bin
    FAKE="$BATS_TEST_TMPDIR/repo"
    HOME="$BATS_TEST_TMPDIR/home"
    mkdir -p "$HOME"
    make_fake_dotfiles_tree "$FAKE"
    export FAKE HOME
    PATH="$MOCK_BIN_DIR:/usr/bin:/bin"
    export PATH
}

@test "install/dotfiles.sh invokes stow with --adopt -t ~ -d . stow" {
    mock_cmd stow 0
    run bash "$FAKE/install/dotfiles.sh"
    [ "$status" -eq 0 ]
    calls="$(mock_calls stow)"
    [[ "$calls" == *"--adopt"* ]]
    [[ "$calls" == *"-t"* ]]
    [[ "$calls" == *"-d"* ]]
    [[ "$calls" == *"stow" ]]
}

@test "uninstall/dotfiles.sh invokes stow with --delete -t ~ -d . stow" {
    mock_cmd stow 0
    # uninstall script doesn't do destructive prep, so it's safe to run against
    # the real repo path with a sandboxed HOME and mocked stow.
    run bash "$DOTFILES_REPO_DIR/uninstall/dotfiles.sh"
    [ "$status" -eq 0 ]
    calls="$(mock_calls stow)"
    [[ "$calls" == *"--delete"* ]]
    [[ "$calls" == *"-t"* ]]
    [[ "$calls" == *"-d"* ]]
    [[ "$calls" == *"stow" ]]
}

@test "install and uninstall use the same stow package name" {
    install_cmd="$(grep -E '^stow' "$DOTFILES_REPO_DIR/install/dotfiles.sh")"
    uninstall_cmd="$(grep -E '^stow' "$DOTFILES_REPO_DIR/uninstall/dotfiles.sh")"
    [[ "$install_cmd" == *"-d . stow"* ]]
    [[ "$uninstall_cmd" == *"-d . stow"* ]]
}

@test "install/dotfiles.sh backs up conflicting target as .old" {
    mock_cmd stow 0
    mkdir -p "$FAKE/stow/.config/wezterm"
    echo "repo-wezterm" > "$FAKE/stow/.config/wezterm/wezterm.lua"
    mkdir -p "$HOME/.config/wezterm"
    echo "stale-wezterm" > "$HOME/.config/wezterm/wezterm.lua"

    run bash "$FAKE/install/dotfiles.sh"
    [ "$status" -eq 0 ]
    # Original is moved aside, preserved at .old; the path is freed so stow
    # can symlink to the repo file.
    [ ! -e "$HOME/.config/wezterm/wezterm.lua" ]
    [ -f "$HOME/.config/wezterm/wezterm.lua.old" ]
    [ "$(cat "$HOME/.config/wezterm/wezterm.lua.old")" = "stale-wezterm" ]
    # Repo version must be untouched.
    [ "$(cat "$FAKE/stow/.config/wezterm/wezterm.lua")" = "repo-wezterm" ]
}

@test "install/dotfiles.sh backs up ALL conflicting targets (no preserve list)" {
    mock_cmd stow 0
    mkdir -p "$FAKE/stow/.config/gh"
    echo "repo-zshrc"  > "$FAKE/stow/.zshrc"
    echo "repo-prof"   > "$FAKE/stow/.zprofile"
    echo "repo-hosts"  > "$FAKE/stow/.config/gh/hosts.yml"

    mkdir -p "$HOME/.config/gh"
    echo "my-zshrc"  > "$HOME/.zshrc"
    echo "my-prof"   > "$HOME/.zprofile"
    echo "my-hosts"  > "$HOME/.config/gh/hosts.yml"

    run bash "$FAKE/install/dotfiles.sh"
    [ "$status" -eq 0 ]
    # Each conflicting local file is moved to <name>.old; nothing remains at
    # the original path so stow can lay down its symlink.
    [ ! -e "$HOME/.zshrc" ]
    [ ! -e "$HOME/.zprofile" ]
    [ ! -e "$HOME/.config/gh/hosts.yml" ]
    [ "$(cat "$HOME/.zshrc.old")" = "my-zshrc" ]
    [ "$(cat "$HOME/.zprofile.old")" = "my-prof" ]
    [ "$(cat "$HOME/.config/gh/hosts.yml.old")" = "my-hosts" ]
}

@test "install/dotfiles.sh leaves existing symlinks in HOME alone" {
    mock_cmd stow 0
    mkdir -p "$FAKE/stow/.config/wezterm"
    echo "repo" > "$FAKE/stow/.config/wezterm/wezterm.lua"

    mkdir -p "$HOME/.config/wezterm" "$BATS_TEST_TMPDIR/elsewhere"
    echo "real" > "$BATS_TEST_TMPDIR/elsewhere/wezterm.lua"
    ln -s "$BATS_TEST_TMPDIR/elsewhere/wezterm.lua" "$HOME/.config/wezterm/wezterm.lua"

    run bash "$FAKE/install/dotfiles.sh"
    [ "$status" -eq 0 ]
    [ -L "$HOME/.config/wezterm/wezterm.lua" ]
}

@test "install/dotfiles.sh does NOT delete repo files when HOME has folded stow symlinks" {
    # Reproduce the destructive scenario: a previous stow run folded the
    # parent directory, so $HOME/.config -> $FAKE/stow/.config. Any path under
    # $HOME/.config/* now resolves into the repo. The script must detect this
    # and skip deletion, otherwise it would erase its own tracked content.
    mock_cmd stow 0
    mkdir -p "$FAKE/stow/.config/wezterm"
    echo "repo-content" > "$FAKE/stow/.config/wezterm/wezterm.lua"

    ln -s "$FAKE/stow/.config" "$HOME/.config"

    run bash "$FAKE/install/dotfiles.sh"
    [ "$status" -eq 0 ]
    # The repo file MUST still be there — deleting it would have been the bug.
    [ -f "$FAKE/stow/.config/wezterm/wezterm.lua" ]
    [ "$(cat "$FAKE/stow/.config/wezterm/wezterm.lua")" = "repo-content" ]
}
