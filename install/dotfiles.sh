#!/bin/bash
# Apply dotfiles using stow

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Applying dotfiles with stow"
cd "$DOTFILES_DIR"

# Stow packages to home directory
# Using -t ~ to target home directory explicitly
# Using -d . to specify the stow directory as current (DOTFILES_DIR)
# .stowignore file automatically excludes unwanted files (macOS junk, cache, etc.)
stow --adopt -t ~ -d . shell
stow --adopt -t ~ -d . .config

success "Dotfiles applied"

echo
success "Setup complete!"
warn "Restart your terminal or run: source \$HOME/.zshrc"
