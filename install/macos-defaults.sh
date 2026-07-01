#!/bin/bash
# Apply macOS System Settings tweaks via `defaults write`

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Applying macOS system settings"

# Desktop & Dock > Mission Control > "Automatically rearrange Spaces based on most recent use"
defaults write com.apple.dock mru-spaces -bool false
killall Dock

success "macOS system settings applied"
