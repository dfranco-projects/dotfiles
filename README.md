# dotfiles

My personal macOS AI and ML dev setup with modular, customizable components.

Reproducible on macOS on Apple Silicon (M1, M2, M3, M4). 
Intel macs and other OS are not supported.

Feel free to use and adapt.

## Features

### Core Stack (Always Installed)
- Homebrew (package management)
- Git, curl, wget
- Essential CLI tools: bat, ripgrep, fd, fzf, eza, direnv, jq, tree, stow

### Dev Stack
- Python 3.13, pyenv, poetry, uv
- Node.js
- Docker, Docker CLI
- tmux
- Visual Studio Code
- WezTerm (terminal)

### macOS plugins
- Rectangle (window management)
- Stats (system monitor)
- Hidden Bar (menu bar organizer)

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
- **default**
- **apathy**
- **blurred**
- **dracula**

### Configs Included
- `.zshrc` - Shell configuration
- `.zprofile` - Shell profile
- `.p10k.zsh` - Powerlevel10k config
- `.fdignore` - fd ignore rules
- WezTerm configuration with multiple themes

## Installation

### Quick Start
```bash
git clone https://github.com/dfranco-projects/dotfiles.git
cd dotfiles
make install
```

If on a fresh macOS, prepare system first:
```bash
xcode-select --install
```

### Modular Installation

Install only what you need:

```bash
# View all available targets
make help

# Install specific components
make install-init            # Core system checks and base packages
make install-dev             # Development stack
make install-mac-plugins     # macOS UI plugins
make install-browser         # Browser (default: zen)
make install-terminal        # WezTerm with theme
make install-vscode          # VS Code extensions
make install-dotfiles        # Apply shell configs
```

### Custom Installation Examples

```bash
# Install Arc browser
make install-browser BROWSER=Arc

# Switch WezTerm theme to blurred
make install-terminal TERMINAL_THEME=blurred

# Switch back to default theme
make install-terminal TERMINAL_THEME=default

# Dev stack only (no UI tools)
make install-init install-dev install-terminal install-dotfiles
```

## License

MIT License - See [LICENSE](LICENSE) for details.