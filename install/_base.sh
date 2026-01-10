#!/bin/bash
# Shared utilities for all install scripts

set -e

# Get script directory
DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export DOTFILES_DIR

# Source logging
source "$DOTFILES_DIR/lib/log.sh"

# Check Apple Silicon
check_apple_silicon() {
    local arch
    arch="$(uname -m)"
    
    if [[ "$arch" != "arm64" ]]; then
        error "Only Apple Silicon Macs are supported"
        exit 1
    fi
    
    success "Apple Silicon confirmed"
}

# Check Xcode Command Line Tools
check_xcode_clt() {
    log "Checking Xcode Command Line Tools"
    
    if ! command -v git >/dev/null 2>&1; then
        error "Xcode Command Line Tools not found"
        log "Installing Xcode Command Line Tools"
        xcode-select --install
        error "Re-run this script after Xcode CLT installation finishes"
        exit 1
    fi
    
    success "Xcode Command Line Tools already installed"
}

# Check and install Homebrew
check_homebrew() {
    log "Checking Homebrew"
    
    if ! command -v brew >/dev/null 2>&1; then
        log "Installing Homebrew"
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        success "Homebrew installed"
    else
        success "Homebrew already installed"
    fi
    
    # Load Homebrew environment
    eval "$(/opt/homebrew/bin/brew shellenv)"
}

# Install a Brewfile
install_brewfile() {
    local brewfile=$1
    local description=$2
    
    if [[ ! -f "$brewfile" ]]; then
        warn "Brewfile not found: $brewfile"
        return
    fi
    
    log "Installing $description"
    brew bundle --file="$brewfile"
    success "$description installed"
}

# Export functions for use in other scripts
export -f log warn error success check_apple_silicon check_xcode_clt check_homebrew install_brewfile
