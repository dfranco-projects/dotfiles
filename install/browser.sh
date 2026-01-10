#!/bin/bash
# Install browser(s) and configurations

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

BROWSER="${1:-zen}"

log "Installing browser: $BROWSER"

case "$BROWSER" in
    zen)
        install_brewfile "$DOTFILES_DIR/brews/Brewfile.browser" "Zen browser"
        if [[ -d "$DOTFILES_DIR/.config/browsers/zen" ]]; then
            log "Applying Zen browser configuration"
            stow --adopt -t "$HOME/.config" -d "$DOTFILES_DIR/.config" browsers/zen || true
        fi
        ;;
    firefox)
        log "Installing Firefox"
        brew install firefox
        if [[ -d "$DOTFILES_DIR/.config/browsers/firefox" ]]; then
            log "Applying Firefox configuration"
            stow --adopt -t "$HOME/.config" -d "$DOTFILES_DIR/.config" browsers/firefox || true
        fi
        ;;
    *)
        error "Unknown browser: $BROWSER"
        exit 1
        ;;
esac

success "Browser setup complete: $BROWSER"
