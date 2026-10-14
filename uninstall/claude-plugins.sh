#!/bin/bash
# Remove the Claude Code plugins listed in claude/plugins.txt. Reverses install/claude-plugins.sh.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

PLUGINS_FILE="$DOTFILES_DIR/claude/plugins.txt"

if ! command -v claude >/dev/null 2>&1; then
    warn "claude CLI not found; nothing to uninstall"
    exit 0
fi

log "Uninstalling Claude Code plugins"

while IFS= read -r plugin || [[ -n "$plugin" ]]; do
    # Skip empty lines and comments
    [[ -z "$plugin" || "$plugin" == \#* ]] && continue

    log "Uninstalling Claude Code plugin: $plugin"
    claude plugin uninstall "$plugin" --scope user \
        || warn "plugin uninstall returned nonzero: $plugin (not installed?)"
done < "$PLUGINS_FILE"

success "Claude Code plugins removed"
