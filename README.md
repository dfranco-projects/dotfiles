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

### Development Stack (Optional)
- Python 3.13, pyenv, poetry, uv
- Node.js
- Docker, Docker CLI
- tmux
- Visual Studio Code
- WezTerm (terminal)

### macOS Enhancements (Optional)
- Rectangle (window management)
- Stats (system monitor)
- Hidden Bar (menu bar organizer)

### Browsers (Optional)
- Zen Browser (default)
- Firefox
- Arc

### Shell
- Zsh + Oh My Zsh
- Powerlevel10k prompt
- Autosuggestions
- Syntax highlighting
- Shared history setup

### Terminal Themes
- **default** - Clean WezTerm configuration
- **blurred** - WezTerm with blurred background

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
make install-mac-looks       # macOS UI enhancements
make install-browser         # Browser (default: zen)
make install-terminal        # WezTerm with theme
make install-vscode          # VS Code extensions
make install-dotfiles        # Apply shell configs
```

### Custom Installation Examples

```bash
# Install with Firefox instead of Zen
make install-browser BROWSER=firefox

# Switch WezTerm theme to blurred
make install-terminal TERMINAL_THEME=blurred

# Switch back to default theme
make install-terminal TERMINAL_THEME=default

# Dev stack only (no UI tools)
make install-init install-dev install-terminal install-dotfiles

# Fresh macOS setup (interactive)
make install
```

## Directory Structure

```
.
├── brews/                          # Modular Brewfiles
│   ├── Brewfile.base              # Essential tools
│   ├── Brewfile.dev               # Development stack
│   ├── Brewfile.mac-looks         # UI enhancements
│   └── Brewfile.browser           # Browsers
├── install/                        # Modular install scripts
│   ├── _base.sh                   # Shared utilities
│   ├── init.sh                    # System initialization
│   ├── shell.sh                   # Shell setup
│   ├── dev.sh                     # Dev stack
│   ├── mac-looks.sh               # UI enhancements
│   ├── browser.sh                 # Browser installation
│   ├── terminal.sh                # WezTerm theme setup
│   ├── vscode.sh                  # VS Code extensions
│   └── dotfiles.sh                # Apply dotfiles
├── .config/
│   ├── wezterm/
│   │   └── themes/                # Terminal themes
│   │       ├── default/
│   │       └── blurred/           # With background image
│   ├── browsers/
│   │   ├── zen/                   # Zen config
│   │   └── firefox/               # Firefox config
│   └── vscode/
│       └── extensions.txt         # VS Code extensions list
├── Makefile                        # Build targets
├── README.md
└── LICENSE
```

## Customization

### Adding WezTerm Themes

1. Create a new directory in `.config/wezterm/themes/`:
   ```bash
   mkdir .config/wezterm/themes/mytheme
   ```

2. Create your `wezterm.lua` config:
   ```bash
   cp .config/wezterm/themes/default/wezterm.lua .config/wezterm/themes/mytheme/
   # Edit mytheme/wezterm.lua to customize
   ```

3. Apply your theme:
   ```bash
   make install-terminal TERMINAL_THEME=mytheme
   ```

### Adding Browsers

Edit `install/browser.sh` to add more browser options, then run:
```bash
make install-browser BROWSER=yourbrowser
```

### Adding VS Code Extensions

Edit `.config/vscode/extensions.txt` and add extensions in `publisher.extension` format:
```
ms-python.python
GitHub.copilot
# ...
```

Then install:
```bash
make install-vscode
```

## Development

All install scripts are modular and sourced from `install/_base.sh` which provides:
- Logging functions (`log`, `warn`, `error`, `success`)
- System checks (Apple Silicon verification, Xcode CLT, Homebrew)
- Brewfile installation utilities

Edit individual scripts in `install/` to customize behavior.

## License

MIT License - See [LICENSE](LICENSE) for details.