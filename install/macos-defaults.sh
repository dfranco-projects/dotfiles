#!/bin/bash
# Apply macOS System Settings tweaks via `defaults write`

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

log "Applying macOS system settings"

# Desktop & Dock > Mission Control > "Automatically rearrange Spaces based on most recent use"
defaults write com.apple.dock mru-spaces -bool false

# Dock: auto-hide, size 62, on the right, minimize windows into the app icon
defaults write com.apple.dock autohide -bool true
defaults write com.apple.dock tilesize -int 62
defaults write com.apple.dock orientation -string right
defaults write com.apple.dock minimize-to-application -bool true
killall Dock

# Appearance: dark mode (System Events applies it live, no logout)
osascript -e 'tell application "System Events" to tell appearance preferences to set dark mode to true'

# Keyboard > "Keyboard navigation": Tab moves focus between all controls
defaults write NSGlobalDomain AppleKeyboardUIMode -int 2

# Finder: path bar and status bar, new windows open on Desktop
defaults write com.apple.finder ShowPathbar -bool true
defaults write com.apple.finder ShowStatusBar -bool true
defaults write com.apple.finder NewWindowTarget -string PfDe
killall Finder

# Trackpad: tap to click (built-in + Bluetooth), tracking speed. Takes effect after logout.
defaults write com.apple.AppleMultitouchTrackpad Clicking -bool true
defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true
defaults -currentHost write NSGlobalDomain com.apple.mouse.tapBehavior -int 1
defaults write NSGlobalDomain com.apple.trackpad.scaling -float 0.875

# Default app for .html files
if command -v duti >/dev/null 2>&1 && [[ -d /Applications/Arc.app ]]; then
    duti -s company.thebrowser.Browser public.html all
else
    warn "duti or Arc not found, skipping .html handler"
fi

success "macOS system settings applied"
