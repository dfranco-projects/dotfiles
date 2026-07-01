#!/bin/bash
# Revert macOS System Settings tweaks

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Reverting macOS system settings"

# Restore default: "Automatically rearrange Spaces based on most recent use"
defaults write com.apple.dock mru-spaces -bool true
killall Dock

log "macOS system settings reverted"
