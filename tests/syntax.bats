#!/usr/bin/env bats

setup() {
    load test_helper
}

@test "all install/*.sh pass bash -n" {
    for f in "$DOTFILES_REPO_DIR"/install/*.sh; do
        run bash -n "$f"
        [ "$status" -eq 0 ] || { echo "syntax error in $f: $output"; false; }
    done
}

@test "all uninstall/*.sh pass bash -n" {
    for f in "$DOTFILES_REPO_DIR"/uninstall/*.sh; do
        run bash -n "$f"
        [ "$status" -eq 0 ] || { echo "syntax error in $f: $output"; false; }
    done
}

@test "lib/log.sh passes bash -n" {
    run bash -n "$DOTFILES_REPO_DIR/lib/log.sh"
    [ "$status" -eq 0 ]
}
