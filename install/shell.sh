#!/bin/bash
# Install and configure shell: Zsh, Oh My Zsh, Powerlevel10k, plugins

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

# Oh My Zsh
log "Checking Oh My Zsh"
if [[ ! -d "$HOME/.oh-my-zsh" ]]; then
    log "Installing Oh My Zsh"
    RUNZSH=no CHSH=no KEEP_ZSHRC=yes \
        sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    success "Oh My Zsh installed"
else
    success "Oh My Zsh already installed"
fi

# Powerlevel10k
log "Checking Powerlevel10k"
if [[ ! -d "/opt/homebrew/share/powerlevel10k" ]]; then
    log "Installing Powerlevel10k"
    brew install powerlevel10k
    success "Powerlevel10k installed"
else
    success "Powerlevel10k already installed"
fi

# Zsh plugins
log "Installing zsh plugins"
brew install zsh-autosuggestions zsh-syntax-highlighting
success "Zsh plugins installed"

# fzf key bindings
log "Configuring fzf key bindings"
"$(brew --prefix)/opt/fzf/install" --no-update-rc --no-bash --no-fish --all
success "fzf configured"

# Fix zsh completion permissions
log "Checking zsh completion permissions"
if command -v compaudit >/dev/null 2>&1; then
    log "Fixing zsh completion permissions"
    compaudit | xargs chmod g-w,o-w || true
    success "Zsh completion permissions fixed"
else
    warn "compaudit not available, skipping permission check"
fi
