# dotfiles

My personal macOS AI and ML dev setup with modular, customizable components.

Reproducible on macOS on Apple Silicon (M1, M2, M3, M4). 
Intel macs and other OS are not supported.

Feel free to use and adapt.

## Usage

### Quick Start
```bash
git clone https://github.com/dfranco-projects/dotfiles.git
cd dotfiles

# View all available install options
make help
```

### Modular Installation

You can either install all of my stack:
```bash
make install
```

Or install only what you need:

```bash
# Install specific components
make install-init            # Core system checks and base packages
make install-dev             # Development stack
make install-mac-plugins     # macOS UI plugins
make install-browser         # Browser (default: arc)
make install-terminal        # WezTerm with theme
make install-vscode          # VS Code extensions
make install-dotfiles        # Apply shell configs
make install-claude-hooks    # Claude Code tab-bar hooks for WezTerm
make install-codegraph       # CodeGraph CLI + MCP wiring for Claude Code
make install-caveman         # Caveman token-compression skill for Claude Code
make install-ponytail        # Ponytail code-minimization plugin for Claude Code
make install-macos-defaults  # macOS System Settings tweaks
make install-voice-control   # Hands-free Claude voice pipeline
```

### Examples

```bash
# Install Arc browser
make install-browser BROWSER=Arc

# Install WezTerm with blurred theme
make install-terminal THEME=blurred

# Dev stack only (no UI tools)
make install-init install-dev install-terminal install-dotfiles
```

## Features

### Dotfiles Management

This repo uses **GNU `stow`** for managing dotfiles. Everything under `stow/` mirrors `$HOME` — shell configs (`.zshrc`, `.p10k.zsh`), `.config/` (wezterm, raycast), `.claude/` (Claude Code settings, hooks, skills), `.local/bin/` helper scripts, and `Library/Application Support/` app configs.

When you run `make install-dotfiles`, stow creates symlinks from `stow/` into your home directory, so all configs stay in version control.

### Core Stack (Always Installed)
- Homebrew (package management)
- Git, curl, wget
- Essential CLI tools: bat, ripgrep, fd, fzf, eza, direnv, jq, tree, stow

### Dev Stack
- Python, pyenv, poetry, uv
- Node.js
- Docker, Docker CLI
- tmux
- Visual Studio Code
- WezTerm (terminal)

### AI tooling
- [CodeGraph](https://github.com/colbymchenry/codegraph) — local, pre-indexed code knowledge graph wired into Claude Code over MCP. Cuts the grep/glob/Read fan-out on large repos (fewer tool calls, fewer tokens; 100% local). Installed on the fly via the official self-contained installer — no Node required. Per-repo indexing is left manual: `cd your-project && codegraph init`.
- Hands-free Claude — a Siri-style pipeline built on macOS Voice Control + Shortcuts: say a wake phrase to start dictating to Claude Code in the focused WezTerm pane (spawning a session there if needed), say "over and out" to send. Ships with a `siri` skill so Claude can set real Clock-app timers/alarms, create reminders and notes, control media, toggle system settings, open System Settings panes, and drive WezTerm panes/tabs. `make install-voice-control` automates the brews, shortcut import, and Claude Code config; enabling Voice Control itself is a guided one-time GUI step (macOS won't let it be scripted).

### macOS plugins
- Rectangle (window management)
- Stats (system monitor)
- Hidden Bar (menu bar organizer)
- Raycast (better spotlight)
- Obsidian (notes)

### Browsers
- Arc (default)
- Zen

### Shell
- Zsh + Oh My Zsh
- Powerlevel10k prompt
- Autosuggestions
- Syntax highlighting
- Shared history setup

### Terminal Themes
- **apathy**
- **blues**
- **blurred**

### Configs Included
- `.zshrc` - Shell configuration
- `.zprofile` - Shell profile
- `.p10k.zsh` - Powerlevel10k config
- `.fdignore` - fd ignore rules
- WezTerm configuration with multiple themes

## License

MIT License - See [LICENSE](LICENSE) for details.