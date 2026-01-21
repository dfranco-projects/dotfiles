#!/bin/bash
# Uninstall development stack

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

uninstall_brewfile "$DOTFILES_DIR/brews/Brewfile.dev" "development stack"

log "Development stack uninstall complete"
