#!/bin/bash
# Install browser(s) and configurations

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

BROWSER="${1:-crest}"
CREST_MCP_HELPER="/Applications/Crest.app/Contents/Helpers/crest-browser"

log "Installing browser: $BROWSER"

case "$BROWSER" in
    crest)
        install_brewfile "$DOTFILES_DIR/brews/Brewfile.browser-crest" "Crest browser"
        # Let Claude Code drive Crest through the MCP server Crest ships.
        if ! command -v claude >/dev/null 2>&1; then
            warn "Claude Code CLI not found, skipping Crest MCP registration"
        elif claude mcp get crest >/dev/null 2>&1; then
            log "Crest MCP server already registered with Claude Code"
        else
            claude mcp add --scope user --transport stdio crest -- "$CREST_MCP_HELPER" mcp
            success "Registered Crest MCP server with Claude Code"
        fi
        log "In Crest, turn on Settings > Agents > Allow agents to use Crest and enable the Agent Space"
        ;;
    zen)
        install_brewfile "$DOTFILES_DIR/brews/Brewfile.browser-zen" "Zen browser"
        ;;
    *)
        error "Unknown browser: $BROWSER"
        exit 1
        ;;
esac

success "Browser setup complete: $BROWSER"
