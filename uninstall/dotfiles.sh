#!/bin/bash
# Reverse dotfiles with stow

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Reversing dotfiles with stow"
cd "$DOTFILES_DIR"
stow --delete . || true
success "Dotfiles reversed"

echo
success "Dotfiles uninstall complete!"
warn "You may need to restart your terminal or run: source \$HOME/.zshrc"
