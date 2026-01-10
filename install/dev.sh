#!/bin/bash
# Install development stack

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

install_brewfile "$DOTFILES_DIR/brews/Brewfile.dev" "development stack"

log "Development stack setup complete"
