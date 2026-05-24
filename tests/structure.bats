#!/usr/bin/env bats

setup() {
    load test_helper
}

# install/X.sh files that intentionally have no uninstall counterpart.
# Update this list when adding new bootstrap-only or utility scripts.
NO_UNINSTALL_REQUIRED=(_base.sh _history.sh init.sh shell.sh)

is_exempt() {
    local name="$1"
    for ex in "${NO_UNINSTALL_REQUIRED[@]}"; do
        [[ "$ex" == "$name" ]] && return 0
    done
    return 1
}

@test "every non-utility install/X.sh has a matching uninstall/X.sh" {
    local missing=()
    for f in "$DOTFILES_REPO_DIR"/install/*.sh; do
        name="$(basename "$f")"
        is_exempt "$name" && continue
        if [[ ! -f "$DOTFILES_REPO_DIR/uninstall/$name" ]]; then
            missing+=("$name")
        fi
    done
    if [[ ${#missing[@]} -gt 0 ]]; then
        echo "missing uninstall scripts for: ${missing[*]}"
        false
    fi
}

@test "every uninstall/X.sh (excluding _base, main) has a matching install/X.sh" {
    local missing=()
    for f in "$DOTFILES_REPO_DIR"/uninstall/*.sh; do
        name="$(basename "$f")"
        [[ "$name" == "_base.sh" || "$name" == "main.sh" ]] && continue
        if [[ ! -f "$DOTFILES_REPO_DIR/install/$name" ]]; then
            missing+=("$name")
        fi
    done
    if [[ ${#missing[@]} -gt 0 ]]; then
        echo "orphan uninstall scripts: ${missing[*]}"
        false
    fi
}

@test "every Brewfile.X referenced has a matching file under brews/" {
    # All Brewfile mentions in install/uninstall scripts must resolve.
    local missing=()
    while IFS= read -r ref; do
        # Pull out paths like "$DOTFILES_DIR/brews/Brewfile.foo" or "brews/Brewfile.foo"
        local rel
        rel="$(echo "$ref" | grep -oE 'brews/Brewfile\.[a-z-]+' | head -n1)"
        [[ -z "$rel" ]] && continue
        if [[ ! -f "$DOTFILES_REPO_DIR/$rel" ]]; then
            missing+=("$rel")
        fi
    done < <(grep -rhE 'brews/Brewfile\.[a-z-]+' "$DOTFILES_REPO_DIR/install" "$DOTFILES_REPO_DIR/uninstall" 2>/dev/null)
    if [[ ${#missing[@]} -gt 0 ]]; then
        echo "missing Brewfiles: ${missing[*]}"
        false
    fi
}

@test "every install-X Makefile target logs to history" {
    # Each non-aggregate install-X target should have a log_history call.
    while IFS= read -r target; do
        [[ "$target" == "install" ]] && continue
        run grep -A 20 "^${target}:" "$DOTFILES_REPO_DIR/Makefile"
        [[ "$output" == *"log_history \"make ${target}"* ]] || {
            echo "target $target does not call log_history"
            false
        }
    done < <(grep -oE '^install-[a-z-]+:' "$DOTFILES_REPO_DIR/Makefile" | sed 's/://')
}
