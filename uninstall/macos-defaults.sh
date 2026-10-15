#!/bin/bash
# Revert macOS System Settings tweaks

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Reverting macOS system settings"

# Restore default: "Automatically rearrange Spaces based on most recent use"
defaults write com.apple.dock mru-spaces -bool true

# Deleting a key falls back to the macOS default
for key in autohide tilesize orientation minimize-to-application; do
    defaults delete com.apple.dock "$key" 2>/dev/null || true
done
killall Dock

osascript -e 'tell application "System Events" to tell appearance preferences to set dark mode to false'

defaults delete NSGlobalDomain AppleKeyboardUIMode 2>/dev/null || true

for key in ShowPathbar ShowStatusBar NewWindowTarget; do
    defaults delete com.apple.finder "$key" 2>/dev/null || true
done
killall Finder

defaults delete com.apple.AppleMultitouchTrackpad Clicking 2>/dev/null || true
defaults delete com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking 2>/dev/null || true
defaults -currentHost delete NSGlobalDomain com.apple.mouse.tapBehavior 2>/dev/null || true
defaults delete NSGlobalDomain com.apple.trackpad.scaling 2>/dev/null || true

log "macOS system settings reverted"
