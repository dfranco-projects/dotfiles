#!/bin/bash
# Install macOS UI enhancements

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

install_brewfile "$DOTFILES_DIR/brews/Brewfile.mac-looks" "macOS UI enhancements"

log "macOS UI enhancements setup complete"
