#!/bin/bash
# Remove the Caveman skill from an AI agent (default: Claude Code).
# Reverses install/caveman.sh via the installer's own --uninstall path.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

CAVEMAN_TARGET="${1:-claude}"

log "Uninstalling Caveman ($CAVEMAN_TARGET)"

if ! command -v node >/dev/null 2>&1; then
    warn "node not found; cannot run Caveman uninstaller. Skipping."
    exit 0
fi

curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh \
    | bash -s -- --only "$CAVEMAN_TARGET" --uninstall || warn "caveman uninstall reported an error"

success "Removed Caveman from $CAVEMAN_TARGET"
