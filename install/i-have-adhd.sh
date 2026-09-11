#!/bin/bash
# Install the i-have-adhd output-style plugin into Claude Code.
#
# i-have-adhd shapes replies for an ADHD reader: next action first, numbered
# steps, no tangents, progress restated each turn. Its SessionStart hook loads
# the ruleset into every session while ~/.claude/.i-have-adhd-always exists, so
# this script creates that flag too (always-on instead of on-demand).
# https://github.com/ayghri/i-have-adhd

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Installing i-have-adhd (Claude Code plugin)"

# Needs the Claude Code CLI; its plugin hook needs Node (ships in Brewfile.dev).
if ! command -v claude >/dev/null 2>&1; then
    error "claude CLI not found. Install Claude Code first."
    exit 1
fi
if ! command -v node >/dev/null 2>&1; then
    error "node not found (i-have-adhd's plugin hook needs Node). Run \`make install-dev\` first."
    exit 1
fi

# Add the marketplace and install the plugin at user (global) scope. Both
# tolerate re-runs: a second add/install just reports it is already present.
claude plugin marketplace add ayghri/i-have-adhd \
    || warn "marketplace add returned nonzero (already configured?)"
claude plugin install i-have-adhd@i-have-adhd \
    || warn "plugin install returned nonzero (already installed?)"

touch "$HOME/.claude/.i-have-adhd-always"

success "i-have-adhd installed into Claude Code (always-on)"
log "Say \"stop adhd mode\" to pause it for one session. Delete ~/.claude/.i-have-adhd-always to switch back to on-demand /i-have-adhd."
