#!/bin/bash
# Install the Claude Code plugins listed in claude/plugins.txt at user scope.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

PLUGINS_FILE="$DOTFILES_DIR/claude/plugins.txt"

if ! command -v claude >/dev/null 2>&1; then
    error "claude CLI not found. Install Claude Code first."
    exit 1
fi

log "Installing Claude Code plugins"

# Refresh the catalog so new plugins in the list resolve.
claude plugin marketplace update claude-plugins-official \
    || warn "marketplace update returned nonzero"

while IFS= read -r plugin || [[ -n "$plugin" ]]; do
    # Skip empty lines and comments
    [[ -z "$plugin" || "$plugin" == \#* ]] && continue

    log "Installing Claude Code plugin: $plugin"
    claude plugin install "$plugin" --scope user \
        || warn "plugin install returned nonzero: $plugin (already installed?)"
done < "$PLUGINS_FILE"

success "Claude Code plugins installed (restart Claude Code to load them)"
