#!/usr/bin/env bash
# Injects the commit-messages skill content into PreToolUse context
# so agents can't skip reading it.
SKILL="$HOME/.claude/skills/commit-messages/SKILL.md"
if [[ -f "$SKILL" ]]; then
  content=$(sed '1,/^---$/{ /^---$/d; d; }' "$SKILL" | sed '/^---$/d')
else
  content="commit-messages skill not found at $SKILL"
fi
python3 -c "
import json, sys
print(json.dumps({
    'hookSpecificOutput': {
        'hookEventName': 'PreToolUse',
        'additionalContext': sys.stdin.read()
    }
}))
" <<< "$content"
