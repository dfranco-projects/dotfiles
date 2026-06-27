#!/bin/bash
# Install the Caveman token-compression skill into an AI agent (default: Claude Code).
#
# Caveman is a cross-agent "skill" that trims agent OUTPUT tokens ~65% by
# stripping filler and using terse fragments — without touching code, commands,
# or error text. It ships no binary: the installer is a Node script that drops
# skill files into each agent's skills dir.
# https://github.com/JuliusBrussee/caveman

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

# Agent to install into: a provider id ("claude", "gemini", "codex", …).
CAVEMAN_TARGET="${1:-claude}"

log "Installing Caveman ($CAVEMAN_TARGET)"

# Caveman's installer requires Node >= 18; node ships in Brewfile.dev. Fail fast
# with a clear pointer rather than letting the upstream script error mid-pipe.
if ! command -v node >/dev/null 2>&1; then
    error "node not found (Caveman needs Node >= 18). Run \`make install-dev\` first."
    exit 1
fi

# --only <id> targets a single agent and skips the interactive multi-select;
# piping through bash is non-interactive, so this runs unattended.
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh \
    | bash -s -- --only "$CAVEMAN_TARGET"

success "Caveman installed into $CAVEMAN_TARGET"
