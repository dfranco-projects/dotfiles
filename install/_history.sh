#!/bin/bash
# History tracking and management utilities

HISTORY_FILE="${DOTFILES_DIR}/.dotfiles.history"

# Log a command to history
log_history() {
    local command=$1
    local timestamp
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $command" >> "$HISTORY_FILE"
}

# Read history from bottom to top, extracting install commands since last uninstall
get_installed_commands() {
    if [[ ! -f "$HISTORY_FILE" ]]; then
        return 0
    fi
    
    local commands=()
    local found_uninstall=false
    
    # Read from bottom to top using tail -r (macOS compatible)
    while IFS= read -r line; do
        # Extract command from line (format: [timestamp] command)
        local cmd=$(echo "$line" | sed 's/^\[[^]]*\] //')
        
        if [[ "$cmd" == "make uninstall" ]]; then
            found_uninstall=true
            break
        fi
        
        # Only track install commands
        if [[ "$cmd" =~ ^make\ install ]]; then
            commands+=("$cmd")
        fi
    done < <(tail -r "$HISTORY_FILE" 2>/dev/null)
    
    # Print commands in reverse order (oldest to newest) for uninstall
    printf '%s\n' "${commands[@]}" | tail -r
}

# Check if history is clean (no installs since last uninstall)
is_history_clean() {
    if [[ ! -f "$HISTORY_FILE" ]]; then
        return 0
    fi
    
    local last_line
    last_line=$(tail -n 1 "$HISTORY_FILE")
    
    # Check if last entry is uninstall
    if [[ "$last_line" =~ make\ uninstall ]]; then
        return 0
    fi
    
    # Check if there are any install commands
    if grep -q "make install" "$HISTORY_FILE"; then
        return 1
    fi
    
    return 0
}

# Print history
print_history() {
    if [[ ! -f "$HISTORY_FILE" ]]; then
        warn "No history file found"
        return
    fi
    
    log "Installation history:"
    echo ""
    cat "$HISTORY_FILE"
    echo ""
}

export -f log_history get_installed_commands is_history_clean print_history
