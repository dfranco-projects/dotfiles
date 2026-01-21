#!/bin/bash
# Uninstall browser

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

BROWSER="${1:-zen}"

log "Uninstalling browser: $BROWSER"

case "$BROWSER" in
    zen)
        uninstall_brewfile "$DOTFILES_DIR/brews/Brewfile.browser" "Zen browser"
        ;;
    firefox)
        log "Uninstalling Firefox"
        if brew list firefox &>/dev/null; then
            brew uninstall firefox
            success "Firefox uninstalled"
        else
            log "Firefox not installed (skipping)"
        fi
        ;;
    *)
        error "Unknown browser: $BROWSER"
        exit 1
        ;;
esac

success "Browser uninstall complete: $BROWSER"
