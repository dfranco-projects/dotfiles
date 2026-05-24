#!/bin/bash
# Install and configure WezTerm with selected theme

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

THEME="${1:-default}"

log "Configuring WezTerm with theme: $THEME"

WEZTERM_THEME_DIR="$DOTFILES_DIR/stow/.config/wezterm/themes/$THEME"

if [[ ! -d "$WEZTERM_THEME_DIR" ]]; then
    error "WezTerm theme not found: $THEME"
    error "Available themes:"
    ls -1 "$DOTFILES_DIR/stow/.config/wezterm/themes/" 2>/dev/null | sed 's/^/  - /'
    exit 1
fi

# Copy theme config to main wezterm config
log "Applying WezTerm theme: $THEME"
WEZTERM_CONFIG="$DOTFILES_DIR/stow/.config/wezterm/wezterm.lua"
if [[ -f "$WEZTERM_THEME_DIR/wezterm.lua" ]]; then
    cp "$WEZTERM_THEME_DIR/wezterm.lua" "$WEZTERM_CONFIG"

    # Inject shared keybindings (keys.lua) before `return config` so theme
    # switches don't wipe them. Idempotent: skips if the require is already present.
    if ! grep -qF 'require("keys").apply(config)' "$WEZTERM_CONFIG"; then
        awk '
            /^return config[[:space:]]*$/ && !injected {
                print "require(\"keys\").apply(config)"
                print ""
                injected = 1
            }
            { print }
        ' "$WEZTERM_CONFIG" > "$WEZTERM_CONFIG.tmp" && mv "$WEZTERM_CONFIG.tmp" "$WEZTERM_CONFIG"
    fi

    success "WezTerm config updated for theme: $THEME"
else
    warn "wezterm.lua not found in theme directory"
fi

# Copy theme assets if they exist
if [[ -d "$WEZTERM_THEME_DIR/assets" ]]; then
    log "Copying theme assets"
    cp -r "$WEZTERM_THEME_DIR/assets/"* "$DOTFILES_DIR/stow/.config/wezterm/assets/" 2>/dev/null || true
fi

success "WezTerm theme installation complete: $THEME"
