#!/bin/bash
# Install browser(s) and configurations

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

BROWSER="${1:-arc}"

log "Installing browser: $BROWSER"

case "$BROWSER" in
    arc)
        log "Installing Arc"
        brew install arc
        if [[ -d "$DOTFILES_DIR/.config/browsers/arc" ]]; then
            log "Applying Arc browser configuration"
            stow --adopt -t "$HOME/.config" -d "$DOTFILES_DIR/.config" browsers/arc || true
        fi
        ;;
    zen)
        install_brewfile "$DOTFILES_DIR/brews/Brewfile.browser" "Zen browser"
        if [[ -d "$DOTFILES_DIR/.config/browsers/zen" ]]; then
            log "Applying Zen browser configuration"
            stow --adopt -t "$HOME/.config" -d "$DOTFILES_DIR/.config" browsers/zen || true
        fi
        ;;
    *)
        error "Unknown browser: $BROWSER"
        exit 1
        ;;
esac

success "Browser setup complete: $BROWSER"
