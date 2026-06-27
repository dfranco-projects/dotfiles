#!/bin/bash
# Remove the Ponytail plugin from Claude Code. Reverses install/ponytail.sh.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Uninstalling Ponytail"

if ! command -v claude >/dev/null 2>&1; then
    warn "claude CLI not found; nothing to uninstall"
    exit 0
fi

claude plugin uninstall ponytail@ponytail || warn "plugin uninstall returned nonzero (not installed?)"
claude plugin marketplace remove ponytail || warn "marketplace remove returned nonzero (not configured?)"

# Clean the state Ponytail writes outside its plugin files (mode flag + config).
rm -f "$HOME/.claude/.ponytail-active" "$HOME/.config/ponytail/config.json"

success "Ponytail removed from Claude Code"
