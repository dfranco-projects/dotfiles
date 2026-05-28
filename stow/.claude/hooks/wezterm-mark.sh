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
# Used by the PreToolUse hook so only ONE state write happens per tool call
# (avoiding a race between a generic "working" hook and a tool-specific one).
if [ "$kind" = "pretooluse" ]; then
	tool=$(cat 2>/dev/null | jq -r '.tool_name // empty' 2>/dev/null || true)
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

case "$kind" in
	input)   : > "$flag" ;;
	working) rm -f "$flag" ;;
	off)     rm -f "$flag" ;;
	start)   rm -f "$flag"; kind=done ;;
	done)    [ -f "$flag" ] && exit 0 ;;
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
