#!/usr/bin/env bash
# SessionStart hook: auto-apply the project-local codegraph toggle so Claude
# honors it without re-running /tokens. Reads <project>/.claude/token-tools.json
# (defaults to "off"). SessionStart stdout is injected into Claude's context, so
# we print the directive there, and stay silent when there is no index.
set -eu

command -v jq >/dev/null 2>&1 || exit 0

proj="${CLAUDE_PROJECT_DIR:-$PWD}"
state="$proj/.claude/token-tools.json"

# codegraph: only worth asserting when an index actually exists in this repo.
[ -d "$proj/.codegraph" ] || exit 0

cg=off
[ -f "$state" ] && cg=$(jq -r '.codegraph // "off"' "$state" 2>/dev/null || printf 'off')

if [ "$cg" = "off" ]; then
	echo "codegraph OFF for this project (.claude/token-tools.json, change with /tokens): do NOT use codegraph / codegraph_explore even though a .codegraph index exists; use grep/Read/glob. Overrides the global CodeGraph instruction for this repo."
else
	echo "codegraph ON for this project: prefer codegraph over grep/Read for code navigation."
fi
