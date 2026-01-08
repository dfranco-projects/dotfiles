#!/bin/bash

# -e: exit on error
set -e

echo "Starting personal macOS AI/ML dev setup"

# ---------- Apple Silicon only ----------
ARCH="$(uname -m)"
if [[ "$ARCH" != "arm64" ]]; then
    echo "Only Apple Silicon Macs are supported"
    exit 1
fi

# ---------- Xcode CLT ----------
if ! command -v git >/dev/null 2>&1; then
    echo "Installing Xcode Command Line Tools"
    xcode-select --install
    echo "Re-run this script after installation finishes"
    exit 1
fi

# ---------- Homebrew ----------
if ! command -v brew >/dev/null 2>&1; then
    echo "Installing Homebrew"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# ---------- Brew env ----------
eval "$(/opt/homebrew/bin/brew shellenv)"

brew update
brew bundle --file=Brewfile

# ---------- Oh My Zsh ----------
if [[ ! -d "$HOME/.oh-my-zsh" ]]; then
    echo "Installing Oh My Zsh"
    RUNZSH=no CHSH=no KEEP_ZSHRC=yes \
        sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
fi

# ---------- Powerlevel10k ----------
if [[ ! -d "/opt/homebrew/share/powerlevel10k" ]]; then
    brew install powerlevel10k
fi

# ---------- Zsh plugins ----------
brew install zsh-autosuggestions zsh-syntax-highlighting

# ---------- fzf key bindings ----------
$(brew --prefix)/opt/fzf/install --no-update-rc --no-bash --no-fish

# ---------- Apply dotfiles ----------
cd stow
stow zsh wezterm fd
cd ..

echo "Setup complete"
echo "Restart your terminal"
