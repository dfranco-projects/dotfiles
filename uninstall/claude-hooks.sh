#!/bin/bash
# Remove only the hook event keys this repo manages from ~/.claude/settings.json.
# Preserves the user's other settings and any unrelated hook events.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

SETTINGS="$HOME/.claude/settings.json"
FRAGMENT="$DOTFILES_DIR/install/claude-hooks.json"

log "Uninstalling Claude Code wezterm-mark hooks"

if ! command -v jq >/dev/null 2>&1; then
    warn "jq not found, skipping"
    exit 0
fi

if [[ ! -f "$SETTINGS" ]]; then
    log "No settings file at $SETTINGS, nothing to do"
    exit 0
fi

if [[ ! -f "$FRAGMENT" ]]; then
    warn "Hooks fragment not found: $FRAGMENT"
    exit 0
fi

if ! jq -e . "$SETTINGS" >/dev/null 2>&1; then
    warn "$SETTINGS is not valid JSON, skipping"
    exit 0
fi

tmp=$(mktemp)
jq --slurpfile frag "$FRAGMENT" '
    .hooks = (
        (.hooks // {})
        | with_entries(select(.key as $k | ($frag[0].hooks // {} | has($k)) | not))
    )
    | if (.hooks | length) == 0 then del(.hooks) else . end
' "$SETTINGS" > "$tmp" && mv "$tmp" "$SETTINGS"

success "Removed Claude Code hooks from $SETTINGS"
