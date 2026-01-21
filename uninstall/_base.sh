#!/bin/bash
# Shared utilities for uninstall scripts

set -e

# Get script directory
DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export DOTFILES_DIR

# Source logging and history utilities
source "$DOTFILES_DIR/lib/log.sh"
source "$DOTFILES_DIR/install/_history.sh"

# Uninstall a Brewfile (remove casks and brews)
uninstall_brewfile() {
    local brewfile=$1
    local description=$2
    
    if [[ ! -f "$brewfile" ]]; then
        warn "Brewfile not found: $brewfile"
        return
    fi
    
    log "Uninstalling $description"
    
    # Extract package names from Brewfile
    local packages
    packages=$(grep -E '^(brew|cask) ' "$brewfile" | sed 's/^[^"]*"\([^"]*\)".*/\1/' | sort -r)
    
    if [[ -z "$packages" ]]; then
        warn "No packages found in $brewfile"
        return
    fi
    
    while IFS= read -r package; do
        [[ -z "$package" ]] && continue
        
        log "Checking if package installed: $package"
        
        if brew list "$package" &>/dev/null; then
            log "Uninstalling: $package"
            brew uninstall --cask "$package" 2>/dev/null || \
            brew uninstall "$package" 2>/dev/null || \
            warn "Failed to uninstall: $package"
            success "Uninstalled: $package"
        else
            log "Package not installed: $package (skipping)"
        fi
    done <<< "$packages"
}

export -f uninstall_brewfile
