#!/bin/bash
# Install VS Code extensions

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

EXTENSIONS_FILE="$DOTFILES_DIR/.config/vscode/extensions.txt"

if ! command -v code >/dev/null 2>&1; then
    warn "VS Code CLI not found, skipping extensions install"
    warn "Run: Shell Command: Install 'code' command in PATH"
    exit 0
fi

if [[ ! -f "$EXTENSIONS_FILE" ]]; then
    warn "Extensions file not found: $EXTENSIONS_FILE"
    exit 0
fi

log "Installing VS Code extensions"

while IFS= read -r extension; do
    # Skip empty lines and comments
    [[ -z "$extension" || "$extension" == \#* ]] && continue
    
    log "Installing VS Code extension: $extension"
    code --install-extension "$extension" --force
done < "$EXTENSIONS_FILE"

success "VS Code extensions installed"
