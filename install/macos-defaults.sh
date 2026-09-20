#!/bin/bash
# Apply macOS System Settings tweaks via `defaults write`

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Applying macOS system settings"

# Desktop & Dock > Mission Control > "Automatically rearrange Spaces based on most recent use"
defaults write com.apple.dock mru-spaces -bool false
killall Dock

# Open .html files in Arc, not an editor. Markdown Preview Enhanced's "Open in
# Browser" shells out to `open`, which follows this association.
if command -v duti >/dev/null 2>&1 && [[ -d /Applications/Arc.app ]]; then
    duti -s company.thebrowser.Browser public.html all
else
    warn "duti or Arc not found, skipping .html handler"
fi

success "macOS system settings applied"
