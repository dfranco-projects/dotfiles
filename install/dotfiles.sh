#!/bin/bash
# Apply dotfiles using stow

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Applying dotfiles with stow"
cd "$DOTFILES_DIR"

# Resolve the canonical source path so the safety check below can compare
# against it even when the script is invoked through symlinks.
SOURCE_REAL="$(cd "$DOTFILES_DIR/stow" && pwd -P)"

log "Backing up conflicting local files as <name>.old so repo versions win"
while IFS= read -r -d '' file; do
    rel="${file#stow/}"
    target="$HOME/$rel"

    # Safety: if the target resolves back into the repo (because a parent dir
    # was folded into a stow symlink, e.g. ~/.config -> stow/.config), the
    # "local file" IS the repo file. Skip — touching it would corrupt tracked
    # content.
    if [[ -e "$target" ]]; then
        target_real="$(cd "$(dirname "$target")" 2>/dev/null && pwd -P)/$(basename "$target")"
        case "$target_real" in
            "$SOURCE_REAL"/*) continue ;;
        esac
    fi

    # Only act on real files. Symlinks belong to a previous stow run and
    # missing targets are no-ops.
    if [[ -f "$target" && ! -L "$target" ]]; then
        log "Backing up $target -> $target.old"
        mv -f "$target" "$target.old"
    fi
done < <(find stow -type f -not -name '.DS_Store' -print0)

# Stow packages to home directory.
# --adopt is kept defensively: after the cleanup above no real file should
# remain at any target, but if one slips through, stow will still succeed
# (adopting it into the package on a single run) rather than aborting.
stow --adopt -t ~ -d . stow

rm -rf "$DOTFILES_DIR"/stow/.config/wezterm/.DS_Store

success "Dotfiles applied"

echo
success "Setup complete!"
warn "Restart your terminal or run: source \$HOME/.zshrc"
