#!/usr/bin/env bats

setup() {
    load test_helper
    DOTFILES_DIR="$BATS_TEST_TMPDIR"
    export DOTFILES_DIR
    HISTORY_FILE="$DOTFILES_DIR/.dotfiles.history"
    # shellcheck disable=SC1090
    source "$DOTFILES_REPO_DIR/lib/log.sh"
    # shellcheck disable=SC1090
    source "$DOTFILES_REPO_DIR/install/_history.sh"
}

@test "log_history appends a timestamped line" {
    log_history "make install-dev"
    [ -f "$HISTORY_FILE" ]
    run cat "$HISTORY_FILE"
    [[ "$output" =~ ^\[[0-9]{4}-[0-9]{2}-[0-9]{2}\ [0-9]{2}:[0-9]{2}:[0-9]{2}\]\ make\ install-dev$ ]]
}

@test "log_history appends multiple entries in order" {
    log_history "make install-init"
    log_history "make install-dev"
    log_history "make install-dotfiles"
    run wc -l < "$HISTORY_FILE"
    [ "$(echo "$output" | tr -d ' ')" = "3" ]
}

@test "is_history_clean returns 0 when no history file" {
    run is_history_clean
    [ "$status" -eq 0 ]
}

@test "is_history_clean returns 0 when last line is uninstall" {
    log_history "make install-dev"
    log_history "make uninstall"
    run is_history_clean
    [ "$status" -eq 0 ]
}

@test "is_history_clean returns 1 when installs present without trailing uninstall" {
    log_history "make install-dev"
    run is_history_clean
    [ "$status" -eq 1 ]
}

@test "get_installed_commands returns empty when no history" {
    run get_installed_commands
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "get_installed_commands returns commands since last uninstall in chronological order" {
    log_history "make install-init"
    log_history "make install-dev"
    log_history "make uninstall"
    log_history "make install-init"
    log_history "make install-terminal THEME=blurred"
    run get_installed_commands
    [ "$status" -eq 0 ]
    expected=$'make install-init\nmake install-terminal THEME=blurred'
    [ "$output" = "$expected" ]
}

@test "get_installed_commands stops at uninstall marker" {
    log_history "make install-init"
    log_history "make uninstall"
    run get_installed_commands
    [ -z "$output" ]
}

@test "get_installed_commands ignores non-install lines" {
    log_history "make install-dev"
    log_history "make history"
    log_history "make install-vscode"
    run get_installed_commands
    expected=$'make install-dev\nmake install-vscode'
    [ "$output" = "$expected" ]
}
