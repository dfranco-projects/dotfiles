#!/bin/bash
# Uninstall WezTerm theme (restore the repo default theme)

set -e
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"

# Matches `THEME ?= kanagawa-dragon-gogh` in the Makefile. The theme being
# removed arrives as $1 from the history entry; it is not what we restore to.
DEFAULT_THEME="kanagawa-dragon-gogh"

log "Restoring WezTerm to the $DEFAULT_THEME theme"

# Reuse the install path so the shared keys.lua/tabs.lua injection stays intact.
bash "$DOTFILES_DIR/install/terminal.sh" "$DEFAULT_THEME"

success "WezTerm restored to the $DEFAULT_THEME theme"
