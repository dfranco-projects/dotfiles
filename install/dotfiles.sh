#!/bin/bash
# Apply dotfiles using stow

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Applying dotfiles with stow"
cd "$DOTFILES_DIR"
stow --adopt .
success "Dotfiles applied"

echo
success "Setup complete!"
warn "Restart your terminal or run: source \$HOME/.zshrc"
