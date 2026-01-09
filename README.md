# dotfiles

My personal macOS AI and ML dev setup.

Reproduceable on macOS on Apple Silicon (M1, M2, M3, M4). 
Intel macs and other OS are not supported.

Feel free to use and adapt.

## Features

### System
- Homebrew (CLI + casks)
- Docker Desktop
- Visual Studio Code
- WezTerm
- Rectangle
- Stats
- Hidden Bar
- Zen Browser

### Shell
- Zsh + Oh My Zsh
- Powerlevel10k
- Autosuggestions
- Syntax highlighting
- Shared history setup

### Dev tooling
- Python
- Pyenv
- Poetry
- Docker CLI
- Node
- Git
- tmux
- fd
- ripgrep
- fzf
- direnv
- jq
- eza
- tree

### Configs in this repo
- `.zshrc`
- `.zprofile`
- `.p10k.zsh`
- `.fdignore`
- `.wezterm.lua`
- WezTerm background images

## Usage

```bash
git clone https://github.com/dfranco-projects/dotfiles.git
cd dotfiles
make install
```

If on a fresh macOS run this before:

```bash
xcode-select --install
```

## WezTerm

The WezTerm setup uses Meslo Nerd Font and custom backgrounds.

Included images:

* wezterm_bg_blurred.png

* wezterm_bg_dark_blurred.png

## Roadmap

This repo will grow over time.
Planned additions include:

* Browser extensions (Zen / Firefox)

* VS Code extensions and settings

* Git and editor defaults

* macOS system tweaks