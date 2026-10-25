.PHONY: help install install-init install-dev install-mac-plugins install-browser install-terminal install-vscode install-dotfiles install-claude-hooks install-codegraph install-i-have-adhd install-claude-plugins install-macos-defaults install-voice-control terminal wezterm uninstall history clean-history theme-list test

# Variables
BROWSER ?= crest
THEME ?= kanagawa-dragon-gogh
CODEGRAPH_TARGET ?= claude
DOTFILES_DIR ?= $(shell pwd)

help:
	@echo "Dotfiles Setup - Available targets:"
	@echo ""
	@echo "Installation:"
	@echo "  make install              - Full installation (every component below)"
	@echo "  make install-init         - Initialize base (checks, Homebrew, base packages)"
	@echo "  make install-dev          - Install development stack"
	@echo "  make install-mac-plugins  - Install macOS UI enhancements"
	@echo "  make install-macos-defaults - Apply macOS System Settings tweaks (defaults write)"
	@echo "  make install-browser      - Install browser (default: crest)"
	@echo "  make install-terminal     - Configure WezTerm theme (default: kanagawa-dragon-gogh)"
	@echo "  make install-vscode       - Install VS Code extensions"
	@echo "  make install-dotfiles     - Apply dotfiles with stow"
	@echo "  make install-claude-hooks - Merge Claude Code tab-bar hooks into ~/.claude/settings.json"
	@echo "  make install-codegraph    - Install CodeGraph CLI + wire its MCP into Claude Code (default: claude)"
	@echo "  make install-i-have-adhd  - Install i-have-adhd output-style plugin into Claude Code (always-on)"
	@echo "  make install-claude-plugins - Install the Claude Code plugins in claude/plugins.txt (user scope)"
	@echo "  make install-voice-control - Set up hands-free Claude voice pipeline (brews + shortcuts + guided Voice Control)"
	@echo "  make wezterm              - Full WezTerm setup (cask + theme + stow dotfiles + Claude hooks)"
	@echo ""
	@echo "Uninstallation:"
	@echo "  make uninstall            - Uninstall everything (reads history)"
	@echo "  make history              - Show installation history"
	@echo "  make clean-history        - Clear history file"
	@echo ""
	@echo "Examples:"
	@echo "  make install                               	# Full setup"
	@echo "  make install-dev                           	# Dev stack only"
	@echo "  make install-browser BROWSER=zen       		# Install Zen browser"
	@echo "  make install-terminal THEME=dracula 			# Install WezTerm with specific theme"
	@echo "  make terminal THEME=dracula 					# Change WezTerm theme only"
	@echo "  make uninstall                             	# Uninstall all (reverse order)"
	@echo ""
	@echo "Terminal themes available:"
	@echo "  make theme-list                            	# List available WezTerm themes"
	@echo ""
	@echo "Tests:"
	@echo "  make test                                  	# Run the bats test suite"

install: install-init install-dev install-mac-plugins install-browser install-terminal install-vscode install-dotfiles install-claude-hooks install-codegraph install-i-have-adhd install-claude-plugins install-macos-defaults install-voice-control
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

install-mac-plugins: install-init
	@chmod +x install/*.sh
	@./install/mac-plugins.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-mac-plugins"'

install-browser: install-init
	@chmod +x install/*.sh
	@./install/browser.sh $(BROWSER)
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-browser BROWSER=$(BROWSER)"'

install-terminal:
	@chmod +x install/*.sh
	@./install/terminal.sh $(THEME)
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-terminal THEME=$(THEME)"'

install-vscode:
	@chmod +x install/*.sh
	@./install/vscode.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-vscode"'

install-dotfiles:
	@chmod +x install/*.sh
	@./install/dotfiles.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-dotfiles"'

install-claude-hooks: install-init
	@chmod +x install/*.sh
	@./install/claude-hooks.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-claude-hooks"'

install-codegraph:
	@chmod +x install/*.sh
	@./install/codegraph.sh $(CODEGRAPH_TARGET)
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-codegraph CODEGRAPH_TARGET=$(CODEGRAPH_TARGET)"'

install-i-have-adhd:
	@chmod +x install/*.sh
	@./install/i-have-adhd.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-i-have-adhd"'

install-claude-plugins:
	@chmod +x install/*.sh
	@./install/claude-plugins.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-claude-plugins"'

install-macos-defaults:
	@chmod +x install/*.sh
	@./install/macos-defaults.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-macos-defaults"'

install-voice-control: install-init
	@chmod +x install/*.sh
	@./install/voice-control.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./install/_history.sh && log_history "make install-voice-control"'

wezterm: install-init
	@brew list --cask wezterm >/dev/null 2>&1 || brew install --cask wezterm
	@$(MAKE) install-terminal THEME=$(THEME)
	@$(MAKE) install-dotfiles
	@$(MAKE) install-claude-hooks
	@echo ""
	@echo "✓ WezTerm full setup complete"

uninstall:
	@chmod +x uninstall/*.sh
	@DOTFILES_DIR=$(DOTFILES_DIR) bash ./uninstall/main.sh

history:
	@DOTFILES_DIR=$(DOTFILES_DIR) bash -c 'source ./lib/log.sh && source ./install/_history.sh && print_history'

clean-history:
	@rm -f .dotfiles.history
	@echo "History file cleared"

terminal:
	@$(MAKE) install-terminal THEME=$(THEME)

theme-list:
	@ls -1 stow/.config/wezterm/themes/ 2>/dev/null || echo "(no themes found)"

test:
	@command -v bats >/dev/null 2>&1 || { echo "bats not installed (brew install bats-core)"; exit 1; }
	@bats tests/
