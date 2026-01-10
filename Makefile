.PHONY: help install install-init install-dev install-mac-looks install-browser install-terminal install-vscode install-dotfiles terminal

# Variables
BROWSER ?= zen
TERMINAL_THEME ?= default

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
	@echo "Examples:"
	@echo "  make install                               # Full setup"
	@echo "  make install-browser BROWSER=firefox       # Install Firefox only"
	@echo "  make install-terminal TERMINAL_THEME=blurred # Use blurred WezTerm theme"
	@echo ""
	@echo "Terminal themes available:"
	@ls -1 .config/wezterm/themes/ 2>/dev/null | sed 's/^/    - /' || echo "    (none found)"

install: install-init install-dev install-mac-looks install-browser install-terminal install-vscode install-dotfiles
	@echo ""
	@echo "✓ Full installation complete!"

install-init:
	@chmod +x install/*.sh
	@./install/init.sh

install-dev: install-init
	@chmod +x install/*.sh
	@./install/dev.sh

install-mac-looks: install-init
	@chmod +x install/*.sh
	@./install/mac-looks.sh

install-browser: install-init
	@chmod +x install/*.sh
	@./install/browser.sh $(BROWSER)

install-terminal:
	@chmod +x install/*.sh
	@./install/terminal.sh $(TERMINAL_THEME)

install-vscode:
	@chmod +x install/*.sh
	@./install/vscode.sh

install-dotfiles:
	@chmod +x install/*.sh
	@./install/dotfiles.sh

# Aliases for easier usage
terminal:
	@make install-terminal TERMINAL_THEME=$(TERMINAL_THEME)
