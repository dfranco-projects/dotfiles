#!/bin/bash
# Uninstall VS Code extensions

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

if ! command -v code >/dev/null 2>&1; then
    warn "VS Code CLI not found, skipping extensions uninstall"
    exit 0
fi

EXTENSIONS_FILE="$DOTFILES_DIR/.config/vscode/extensions.txt"

if [[ ! -f "$EXTENSIONS_FILE" ]]; then
    warn "Extensions file not found: $EXTENSIONS_FILE"
    exit 0
fi

log "Uninstalling VS Code extensions"

while IFS= read -r extension; do
    # Skip empty lines and comments
    [[ -z "$extension" || "$extension" == \#* ]] && continue
    
    log "Checking VS Code extension: $extension"
    if code --list-extensions | grep -q "^$extension$"; then
        log "Uninstalling VS Code extension: $extension"
        code --uninstall-extension "$extension" 2>&1 || warn "Failed to uninstall: $extension"
    else
        log "Extension not installed: $extension (skipping)"
    fi
done < "$EXTENSIONS_FILE"

success "VS Code extensions uninstall complete"
