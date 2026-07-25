#!/bin/bash
# Install the hands-free Claude voice pipeline: brews used by the siri skill,
# the shipped Shortcuts, and guided Voice Control setup. Voice Control itself
# (enable + custom commands + vocabulary) is GUI-only by design on macOS, so
# this script automates what it can and prints an exact checklist for the rest.

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

install_brewfile "$DOTFILES_DIR/brews/Brewfile.voice-control" "voice control tools"

# The wake-phrase shortcut runs this stowed helper.
if [[ ! -x "$HOME/.local/bin/claude-voice-listen" ]]; then
    warn "~/.local/bin/claude-voice-listen missing — run 'make install-dotfiles' first"
fi

# Import shipped Shortcuts. macOS has no CLI import: the repo stores unsigned
# workflow plists (downloaded via each shortcut's iCloud-link API), which get
# signed locally and opened — one "Add Shortcut" click per shortcut.
for f in "$DOTFILES_DIR"/shortcuts/*.shortcut; do
    if [[ ! -e "$f" ]]; then
        warn "no .shortcut files in shortcuts/ — refresh them from a configured machine (Share > Copy iCloud Link, then curl the api/records downloadURL)"
        break
    fi
    name="$(basename "$f" .shortcut)"
    if shortcuts list | grep -qx "$name"; then
        log "Shortcut already installed: $name"
    else
        signed="$(mktemp -d)/$name.shortcut"
        shortcuts sign -m anyone -i "$f" -o "$signed"
        log "Importing shortcut: $name — click 'Add Shortcut'"
        open "$signed"
    fi
done

log "Manual Voice Control setup (one time, GUI-only by design):"
echo "  1. System Settings > Accessibility > Voice Control: turn ON"
echo "  2. Commands… > + : say your wake phrase (e.g. 'Bravo Six')  -> Run Shortcut > claude-listen"
echo "  3. Commands… > + : 'over and out'                           -> Press Keyboard Shortcut > ⌃Y"
echo "  4. Vocabulary… > + : add 'Claude'"
open "x-apple.systempreferences:com.apple.Accessibility-Settings.extension" || true

log "Voice control setup complete"
