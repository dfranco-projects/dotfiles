#!/bin/bash
# Unwire CodeGraph's MCP server from an AI agent (default: Claude Code).
# Reverses install/codegraph.sh: strips the MCP server config, instructions and
# permissions from each configured agent. Leaves the CLI binary on disk — remove
# it manually if you no longer want the `codegraph` command.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

CODEGRAPH_TARGET="${1:-claude}"

log "Uninstalling CodeGraph"

if ! command -v codegraph >/dev/null 2>&1; then
    for dir in "$HOME/.local/bin" "$HOME/.codegraph/bin" "$HOME/.codegraph"; do
        [[ -x "$dir/codegraph" ]] && export PATH="$dir:$PATH"
    done
fi

if command -v codegraph >/dev/null 2>&1; then
    codegraph uninstall --target="$CODEGRAPH_TARGET" --yes || warn "codegraph uninstall reported an error"
    success "Unwired CodeGraph from $CODEGRAPH_TARGET"
else
    warn "codegraph CLI not found; nothing to unwire"
fi

log "CodeGraph CLI binary left in place. Remove it manually if desired."
