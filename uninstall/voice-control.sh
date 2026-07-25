#!/bin/bash
# Uninstall voice control tools

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

uninstall_brewfile "$DOTFILES_DIR/brews/Brewfile.voice-control" "voice control tools"

warn "Manual leftovers: delete the claude-* shortcuts in Shortcuts.app and the Voice Control commands/vocabulary in System Settings > Accessibility"

log "Voice control uninstall complete"
