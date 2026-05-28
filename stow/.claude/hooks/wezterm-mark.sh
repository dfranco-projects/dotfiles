#!/usr/bin/env bash
# Set the WezTerm pane user var `claude_state` so the tab bar can show a
# colored attention indicator. Used by Claude Code's Notification + Stop hooks.
#
# Usage: wezterm-mark.sh <notification|stop>
set -eu

kind="${1:?kind required (working|input|done|off|start|pretooluse)}"

# Only meaningful in WezTerm.
[ "${TERM_PROGRAM:-}" = "WezTerm" ] || exit 0

# Dispatcher: read tool_name from hook stdin and pick the right kind.
# Used by the PreToolUse hook so only ONE state write happens per tool call.
# Pure-bash parse — no jq/cat fork — to minimize hook latency when several
# Claude sessions are firing hooks in parallel.
if [ "$kind" = "pretooluse" ]; then
	input=$(</dev/stdin)
	tool=""
	if [[ "$input" =~ \"tool_name\"[[:space:]]*:[[:space:]]*\"([^\"]+)\" ]]; then
		tool="${BASH_REMATCH[1]}"
	fi
	case "$tool" in
		AskUserQuestion) kind="input" ;;
		*)               kind="working" ;;
	esac
fi

# Per-pane sticky flag: "input" sets it; "working"/"off" clear it; "done" is
# suppressed while it's set. This keeps orange visible during AskUserQuestion
# (where Stop fires while the question is still on screen) and during
# permission prompts, until the user actually responds.
flag_dir="${TMPDIR:-/tmp}"
flag="$flag_dir/.claude-input-pending.${WEZTERM_PANE:-default}"

# Safety: if the flag is older than this many seconds when "done" fires, treat
# it as stale (e.g. a PostToolUse/PreToolUse clearer was missed because hooks
# weren't reloaded) and let the indicator turn green. Fresh flags still hold.
flag_ttl=60

case "$kind" in
	input)   : > "$flag" ;;
	working) rm -f "$flag" ;;
	off)     rm -f "$flag" ;;
	start)   rm -f "$flag"; kind=done ;;
	done)
		if [ -f "$flag" ]; then
			mtime=$(stat -f %m "$flag" 2>/dev/null || echo 0)
			now=$(date +%s)
			if [ "$((now - mtime))" -lt "$flag_ttl" ]; then
				exit 0
			fi
			rm -f "$flag"
		fi
		;;
esac

# "off" clears the user var (empty value) so the tab indicator turns off.
# For any other kind we encode `<kind>:<unix_ts>` so consecutive same-kind
# events still register a change in WezTerm.
if [ "$kind" = "off" ]; then
	value=""
else
	payload="$kind:$(date +%s)"
	value=$(printf '%s' "$payload" | base64 | tr -d '\n')
fi
osc=$(printf '\033]1337;SetUserVar=claude_state=%s\007' "$value")

# Try /dev/tty first; fall back to walking up the process tree until we find a
# process bound to a real tty (Claude Code's pty inside WezTerm). Hooks are
# often spawned detached from a controlling terminal, so /dev/tty alone fails.
if { printf '%s' "$osc" > /dev/tty; } 2>/dev/null; then
	exit 0
fi

pid=$$
while [ -n "$pid" ] && [ "$pid" -gt 1 ]; do
	tty=$(ps -o tty= -p "$pid" 2>/dev/null | tr -d ' ' || true)
	if [ -n "$tty" ] && [ "$tty" != "??" ] && [ "$tty" != "?" ]; then
		if { printf '%s' "$osc" > "/dev/$tty"; } 2>/dev/null; then
			exit 0
		fi
	fi
	pid=$(ps -o ppid= -p "$pid" 2>/dev/null | tr -d ' ' || true)
done

exit 0
