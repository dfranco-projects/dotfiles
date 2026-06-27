#!/usr/bin/env bash
# SessionStart hook: auto-apply the project-local token-saver config so Claude
# honors it without re-running /tokens. Reads <project>/.claude/token-tools.json
# (all tools default to "off"). SessionStart stdout is injected into Claude's
# context, so we print directives there — and stay silent when there is nothing
# to assert, to keep the session start clean.
set -eu

command -v jq >/dev/null 2>&1 || exit 0

proj="${CLAUDE_PROJECT_DIR:-$PWD}"
state="$proj/.claude/token-tools.json"

get() { # get <key>; echoes the stored value or "off" (the default)
	[ -f "$state" ] || { printf 'off'; return; }
	jq -r --arg k "$1" '.[$k] // "off"' "$state" 2>/dev/null || printf 'off'
}

cg=$(get codegraph); rtk=$(get rtk); cav=$(get caveman); pony=$(get ponytail)

lines=""
# codegraph: only worth asserting when an index actually exists in this repo.
if [ -d "$proj/.codegraph" ]; then
	if [ "$cg" = "off" ]; then
		lines="${lines}- codegraph OFF: do NOT use codegraph / codegraph_explore even though a .codegraph index exists; use grep/Read/glob. Overrides the global CodeGraph instruction for this repo.
"
	else
		lines="${lines}- codegraph ON: prefer codegraph over grep/Read for code navigation.
"
	fi
fi
[ "$rtk" = "on" ]   && lines="${lines}- rtk ON: route model calls through the rtk proxy.
"
[ "$cav" != "off" ] && lines="${lines}- caveman ${cav}: compress your prose at the ${cav} level.
"
[ "$pony" != "off" ] && lines="${lines}- ponytail ${pony}: minimize the code you write at the ${pony} level.
"

[ -n "$lines" ] || exit 0
printf 'Active token-saver config for this project (.claude/token-tools.json — change with /tokens):\n%s' "$lines"
