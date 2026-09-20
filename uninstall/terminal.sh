#!/bin/bash
# Uninstall WezTerm theme (restore the repo default theme)

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

# Mirrors THEME in the Makefile. $1 is the theme being removed, not the target.
DEFAULT_THEME="kanagawa-dragon-gogh"

log "Restoring WezTerm to the $DEFAULT_THEME theme"

# Reuse install so the keys/tabs injection stays.
bash "$DOTFILES_DIR/install/terminal.sh" "$DEFAULT_THEME"

success "WezTerm restored to the $DEFAULT_THEME theme"
