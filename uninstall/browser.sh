#!/bin/bash
# Uninstall browser

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

BROWSER="${1:-zen}"

log "Uninstalling browser: $BROWSER"

case "$BROWSER" in
    zen)
        log "Uninstalling Zen"
        if brew list zen &>/dev/null; then
            brew uninstall --cask zen
            success "Zen uninstalled"
        else
            log "Zen not installed (skipping)"
        fi
        ;;
    arc)
        log "Uninstalling Arc"
        if brew list arc &>/dev/null; then
            brew uninstall --cask arc
            success "Arc uninstalled"
        else
            log "Arc not installed (skipping)"
        fi
        ;;
    *)
        error "Unknown browser: $BROWSER"
        exit 1
        ;;
esac

success "Browser uninstall complete: $BROWSER"
