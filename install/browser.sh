#!/bin/bash
# Install browser(s) and configurations

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

BROWSER="${1:-arc}"

log "Installing browser: $BROWSER"

case "$BROWSER" in
    arc)
        brew install arc
        ;;
    zen)
        install_brewfile "$DOTFILES_DIR/brews/Brewfile.browser" "Zen browser"
        ;;
    *)
        error "Unknown browser: $BROWSER"
        exit 1
        ;;
esac

success "Browser setup complete: $BROWSER"
