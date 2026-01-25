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

```bash
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

### macOS plugins
- Rectangle (window management)
- Stats (system monitor)
- Hidden Bar (menu bar organizer)
- Raycast

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