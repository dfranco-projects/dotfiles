#!/bin/bash
# Uninstall WezTerm theme (restore to default)

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

THEME="${1:-default}"

log "Restoring WezTerm to default theme"

# Restore default theme
DEFAULT_THEME_DIR="$DOTFILES_DIR/.config/wezterm/themes/default"

if [[ -f "$DEFAULT_THEME_DIR/wezterm.lua" ]]; then
    log "Restoring default WezTerm config"
    cp "$DEFAULT_THEME_DIR/wezterm.lua" "$DOTFILES_DIR/.config/wezterm/wezterm.lua"
    success "WezTerm restored to default theme"
else
    warn "Default theme not found, skipping WezTerm restoration"
fi
