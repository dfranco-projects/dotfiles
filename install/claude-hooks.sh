#!/bin/bash
# Install Claude Code hooks that drive the WezTerm tab-bar attention indicator.
# Merges only the hook event keys defined in claude-hooks.json into the user's
# existing ~/.claude/settings.json — everything else is preserved.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

SETTINGS="$HOME/.claude/settings.json"
FRAGMENT="$DOTFILES_DIR/install/claude-hooks.json"

log "Installing Claude Code wezterm-mark hooks"

if ! command -v jq >/dev/null 2>&1; then
    error "jq not found (run \`make install-init\` first)"
    exit 1
fi

if [[ ! -f "$FRAGMENT" ]]; then
    error "Hooks fragment not found: $FRAGMENT"
    exit 1
fi

mkdir -p "$(dirname "$SETTINGS")"

# Refuse to clobber a malformed settings.json — fix it manually first.
if [[ -f "$SETTINGS" ]] && ! jq -e . "$SETTINGS" >/dev/null 2>&1; then
    error "$SETTINGS is not valid JSON. Fix or remove it, then retry."
    exit 1
fi
[[ -f "$SETTINGS" ]] || echo '{}' > "$SETTINGS"

# Shallow-merge at the hook-event level: our keys overwrite, theirs survive.
# If the user has their own PreToolUse hook, this replaces it — by design, we
# fully own the events listed in the fragment.
tmp=$(mktemp)
jq --slurpfile frag "$FRAGMENT" \
    '.hooks = ((.hooks // {}) + ($frag[0].hooks // {}))' \
    "$SETTINGS" > "$tmp" && mv "$tmp" "$SETTINGS"

success "Installed Claude Code hooks into $SETTINGS"
log "Reload via /hooks in Claude Code, or restart it, for the hooks to fire."
