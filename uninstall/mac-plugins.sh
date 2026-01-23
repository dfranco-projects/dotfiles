#!/bin/bash
# Uninstall macOS UI enhancements

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

uninstall_brewfile "$DOTFILES_DIR/brews/Brewfile.mac-plugins" "macOS UI enhancements"

log "macOS UI enhancements uninstall complete"
