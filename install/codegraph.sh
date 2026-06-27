#!/bin/bash
# Install the CodeGraph CLI and wire its MCP server into an AI agent (default: Claude Code).
#
# CodeGraph builds a local, pre-indexed knowledge graph of a codebase (symbols,
# call paths, blast radius) so agents resolve "how does X flow" in a couple of
# MCP calls instead of a long grep/glob/Read fan-out — fewer tool calls, fewer
# tokens on large repos. It is 100% local (SQLite + tree-sitter).
# https://github.com/colbymchenry/codegraph
#
# This wires the CLI globally; it does NOT run `codegraph init`. Indexing is
# per-repo and only pays off on large codebases, so that stays a manual,
# per-project decision: `cd your-project && codegraph init`.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

# Agent(s) to wire. csv ("cursor,claude"), "auto" (all detected), or a single id.
CODEGRAPH_TARGET="${1:-claude}"

# Make the codegraph binary reachable in this non-interactive shell. The official
# installer puts it on PATH for new login shells, but not for the current one.
ensure_codegraph_on_path() {
    command -v codegraph >/dev/null 2>&1 && return 0
    local dir
    for dir in "$HOME/.local/bin" "$HOME/.codegraph/bin" "$HOME/.codegraph"; do
        [[ -x "$dir/codegraph" ]] && export PATH="$dir:$PATH"
    done
    command -v codegraph >/dev/null 2>&1
}

log "Installing CodeGraph"

# Install the CLI on the fly via the official self-contained installer (no Node
# required). Idempotent: skip the download if it is already present.
if ensure_codegraph_on_path; then
    success "CodeGraph CLI already installed ($(codegraph --version 2>/dev/null || echo present))"
else
    log "Fetching CodeGraph CLI installer"
    curl -fsSL https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.sh | sh
    success "CodeGraph CLI installed"
fi

if ! ensure_codegraph_on_path; then
    error "codegraph not found on PATH after install. Open a new shell and re-run."
    exit 1
fi

# Wire the MCP server into the agent(s), globally, non-interactively.
log "Wiring CodeGraph MCP server into: $CODEGRAPH_TARGET (global)"
codegraph install --target="$CODEGRAPH_TARGET" --location=global --yes

success "CodeGraph installed and wired into $CODEGRAPH_TARGET"
log "Per-repo: run \`codegraph init\` inside a project to build its index."
