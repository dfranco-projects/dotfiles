#!/bin/bash
# Initialize core system: checks, Homebrew, and base packages

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Starting macOS setup"
check_apple_silicon
check_xcode_clt
check_homebrew

# Install base packages
install_brewfile "$DOTFILES_DIR/brews/Brewfile.base" "base packages"
