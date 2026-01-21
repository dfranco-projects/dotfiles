.PHONY: help install install-init install-dev install-mac-looks install-browser install-terminal install-vscode install-dotfiles terminal uninstall history clean-history

# Variables
BROWSER ?= zen
TERMINAL_THEME ?= default
DOTFILES_DIR ?= $(shell pwd)

help:
	@echo "Dotfiles Setup - Available targets:"
	@echo ""
	@echo "Installation:"
	@echo "  make install              - Full installation (init + dev + shell + dotfiles)"
	@echo "  make install-init         - Initialize base (checks, Homebrew, base packages)"
	@echo "  make install-dev          - Install development stack"
	@echo "  make install-mac-looks    - Install macOS UI enhancements"
	@echo "  make install-browser      - Install browser(s) (default: zen)"
	@echo "  make install-terminal     - Configure WezTerm theme (default: default)"
	@echo "  make install-vscode       - Install VS Code extensions"
	@echo "  make install-dotfiles     - Apply dotfiles with stow"
	@echo ""
	@echo "Uninstallation:"
	@echo "  make uninstall            - Uninstall everything (reads history)"
	@echo "  make history              - Show installation history"
	@echo "  make clean-history        - Clear history file"
	@echo ""
	@echo "Examples:"
	@echo "  make install                               # Full setup"
	@echo "  make install-dev                           # Dev stack only"
	@echo "  make install-browser BROWSER=firefox       # Install Firefox only"
	@echo "  make install-terminal TERMINAL_THEME=blurred # Use blurred WezTerm theme"
	@echo "  make uninstall                             # Uninstall all (reverse order)"
	@echo ""
	@echo "Terminal themes available:"
	@ls -1 .config/wezterm/themes/ 2>/dev/null | sed 's/^/    - /' || echo "    (none found)"

install: install-init install-dev install-mac-looks install-browser install-terminal install-vscode install-dotfiles
	@echo ""
	@echo "✓ Full installation complete!"
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install"'

install-init:
	@chmod +x install/*.sh
	@./install/init.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-init"'

install-dev: install-init
	@chmod +x install/*.sh
	@./install/dev.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-dev"'

install-mac-looks: install-init
	@chmod +x install/*.sh
	@./install/mac-looks.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-mac-looks"'

install-browser: install-init
	@chmod +x install/*.sh
	@./install/browser.sh $(BROWSER)
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-browser BROWSER=$(BROWSER)"'

install-terminal:
	@chmod +x install/*.sh
	@./install/terminal.sh $(TERMINAL_THEME)
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-terminal TERMINAL_THEME=$(TERMINAL_THEME)"'

install-vscode:
	@chmod +x install/*.sh
	@./install/vscode.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-vscode"'

install-dotfiles:
	@chmod +x install/*.sh
	@./install/dotfiles.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-dotfiles"'

uninstall:
	@chmod +x uninstall/*.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash ./uninstall/main.sh

history:
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./lib/log.sh && source ./install/_history.sh && print_history'

clean-history:
	@rm -f .dotfiles.history
	@echo "History file cleared"

# Aliases for easier usage
terminal:
	@make install-terminal TERMINAL_THEME=$(TERMINAL_THEME)
