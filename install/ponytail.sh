#!/bin/bash
# Install the Ponytail minimalism plugin into Claude Code.
#
# Ponytail injects a "lazy senior dev" decision ladder so the agent writes the
# least code that works (reuse > stdlib > native > one-liner > minimal new code)
# — ~54% less code and ~22% fewer tokens on real sessions. Orthogonal to Caveman:
# Caveman compresses output prose, Ponytail compresses the code itself.
# For Claude Code it ships as a plugin via the `claude` CLI marketplace.
# https://github.com/DietrichGebert/ponytail

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Installing Ponytail (Claude Code plugin)"

# Needs the Claude Code CLI; its plugin hooks need Node (ships in Brewfile.dev).
if ! command -v claude >/dev/null 2>&1; then
    error "claude CLI not found. Install Claude Code first."
    exit 1
fi
if ! command -v node >/dev/null 2>&1; then
    error "node not found (Ponytail's plugin hooks need Node). Run \`make install-dev\` first."
    exit 1
fi

# Add the marketplace and install the plugin at user (global) scope. Both
# tolerate re-runs — a second add/install just reports it is already present.
claude plugin marketplace add DietrichGebert/ponytail \
    || warn "marketplace add returned nonzero (already configured?)"
claude plugin install ponytail@ponytail \
    || warn "plugin install returned nonzero (already installed?)"

success "Ponytail installed into Claude Code"
log "Set intensity with /ponytail [lite|full|ultra|off], or via /tokens."
