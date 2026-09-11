#!/bin/bash
# Remove the i-have-adhd plugin from Claude Code. Reverses install/i-have-adhd.sh.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Uninstalling i-have-adhd"

if ! command -v claude >/dev/null 2>&1; then
    warn "claude CLI not found; nothing to uninstall"
    exit 0
fi

claude plugin uninstall i-have-adhd@i-have-adhd || warn "plugin uninstall returned nonzero (not installed?)"
claude plugin marketplace remove i-have-adhd || warn "marketplace remove returned nonzero (not configured?)"

# The always-on flag lives outside the plugin files.
rm -f "$HOME/.claude/.i-have-adhd-always"

success "i-have-adhd removed from Claude Code"
