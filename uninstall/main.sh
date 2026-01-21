#!/bin/bash
# Main uninstall orchestrator - reads history and uninstalls in reverse order

set -e

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export DOTFILES_DIR

# Source logging and history utilities
source "$DOTFILES_DIR/lib/log.sh"
source "$DOTFILES_DIR/install/_history.sh"

log "Starting uninstall process"
echo ""

# Check if history is clean
if is_history_clean; then
    log "History is clean"
    warn "No installations to uninstall, everything is already clean!"
    exit 0
fi

# Get installed commands in reverse order (from oldest to newest installed)
log "Reading installation history"
installed_commands=$(get_installed_commands)

if [[ -z "$installed_commands" ]]; then
    warn "No installation commands found in history, everything is clean!"
    exit 0
fi

echo ""
log "Installations to uninstall (in reverse order):"
echo "$installed_commands" | sed 's/^/  - /'
echo ""

# Ask for confirmation
echo ""
read -p "Do you want to proceed with uninstall? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    warn "Uninstall cancelled"
    exit 0
fi

echo ""

# Parse commands and execute uninstalls in reverse order
while IFS= read -r cmd; do
    [[ -z "$cmd" ]] && continue
    
    # Parse the command: "make install-<component> [PARAM=value]"
    # Extract component name
    if [[ $cmd =~ make\ install-([a-z-]+) ]]; then
        component="${BASH_REMATCH[1]}"
        
        # Extract additional parameters if present
        param=""
        if [[ $cmd =~ ([A-Z_]+=[^ ]+) ]]; then
            param="${BASH_REMATCH[1]}"
        fi
        
        log ""
        log "Uninstalling: $component (from: $cmd)"
        
        # Execute corresponding uninstall script
        uninstall_script="$DOTFILES_DIR/uninstall/$component.sh"
        
        if [[ ! -f "$uninstall_script" ]]; then
            error "Uninstall script not found: $uninstall_script"
            warn "Skipping uninstall for: $component"
            continue
        fi
        
        # Run uninstall script with parameters if present
        if [[ -n "$param" ]]; then
            bash "$uninstall_script" "${param#*=}" || warn "Uninstall failed for: $component"
        else
            bash "$uninstall_script" || warn "Uninstall failed for: $component"
        fi
    fi
done <<< "$installed_commands"

echo ""
log "Registering uninstall in history"
log_history "make uninstall"

echo ""
success "Uninstall complete!"
warn "Restart your terminal or run: source \$HOME/.zshrc"
