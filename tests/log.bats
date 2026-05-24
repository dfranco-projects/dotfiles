#!/usr/bin/env bats

setup() {
    load test_helper
    # shellcheck disable=SC1090
    source "$DOTFILES_REPO_DIR/lib/log.sh"
}

@test "log prints message with ==> prefix" {
    run log "hello"
    [ "$status" -eq 0 ]
    [[ "$output" == *"==>"* ]]
    [[ "$output" == *"hello"* ]]
}

@test "success prints message with check mark" {
    run success "done"
    [ "$status" -eq 0 ]
    [[ "$output" == *"✔"* ]]
    [[ "$output" == *"done"* ]]
}

@test "warn prints message with warning glyph" {
    run warn "careful"
    [ "$status" -eq 0 ]
    [[ "$output" == *"⚠"* ]]
    [[ "$output" == *"careful"* ]]
}

@test "error prints message with cross mark" {
    run error "bad"
    [ "$status" -eq 0 ]
    [[ "$output" == *"✖"* ]]
    [[ "$output" == *"bad"* ]]
}
