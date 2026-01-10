#!/bin/bash
set -e

# ---------- Load logging ----------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$DOTFILES_DIR/lib/log.sh"

log "Starting personal macOS AI/ML dev setup"

# ---------- Apple Silicon only ----------
ARCH="$(uname -m)"
log "Detected architecture: $ARCH"

if [[ "$ARCH" != "arm64" ]]; then
    error "Only Apple Silicon Macs are supported"
    exit 1
fi
success "Apple Silicon confirmed"

# ---------- Xcode CLT ----------
log "Checking Xcode Command Line Tools"

if ! command -v git >/dev/null 2>&1; then
    warn "Xcode Command Line Tools not found"
    log "Installing Xcode Command Line Tools"
    xcode-select --install
    warn "Re-run this script after installation finishes"
    exit 1
fi
success "Xcode Command Line Tools already installed"

# ---------- Homebrew ----------
log "Checking Homebrew"

if ! command -v brew >/dev/null 2>&1; then
    log "Installing Homebrew"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    success "Homebrew installed"
else
    success "Homebrew already installed"
fi

# ---------- Brew env ----------
log "Loading Homebrew environment"
eval "$(/opt/homebrew/bin/brew shellenv)"

# ---------- Brew bundle ----------
log "Installing Brewfile dependencies"
brew bundle --file=Brewfile
success "Brewfile dependencies installed"

# ---------- Oh My Zsh ----------
log "Checking Oh My Zsh"

if [[ ! -d "$HOME/.oh-my-zsh" ]]; then
    log "Installing Oh My Zsh"
    RUNZSH=no CHSH=no KEEP_ZSHRC=yes \
        sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    success "Oh My Zsh installed"
else
    success "Oh My Zsh already installed"
fi

# ---------- Fix zsh completion permissions ----------
log "Checking zsh completion permissions"

if command -v compaudit >/dev/null 2>&1; then
    log "Fixing zsh completion permissions"
    compaudit | xargs chmod g-w,o-w || true
    success "Zsh completion permissions fixed"
else
    warn "compaudit not available, skipping permission check"
fi

# ---------- Powerlevel10k ----------
log "Checking Powerlevel10k"

if [[ ! -d "/opt/homebrew/share/powerlevel10k" ]]; then
    log "Installing Powerlevel10k"
    brew install powerlevel10k
    success "Powerlevel10k installed"
else
    success "Powerlevel10k already installed"
fi

# ---------- Zsh plugins ----------
log "Installing zsh plugins"
brew install zsh-autosuggestions zsh-syntax-highlighting
success "Zsh plugins installed"

# ---------- fzf key bindings ----------
log "Configuring fzf key bindings"
"$(brew --prefix)/opt/fzf/install" --no-update-rc --no-bash --no-fish --all
success "fzf configured"

# ---------- Apply dotfiles ----------
log "Applying dotfiles with stow"
stow --adopt .
success "Dotfiles applied"

# ---------- VS Code extensions ----------
log "Installing VS Code extensions"

if command -v code >/dev/null 2>&1; then
    while read -r extension; do
        [[ -z "$extension" || "$extension" == \#* ]] && continue
        log "Installing VS Code extension: $extension"
        code --install-extension "$extension" --force
    done < "$DOTFILES_DIR/vscode/extensions.txt"

    success "VS Code extensions installed"
else
    warn "VS Code CLI not found, skipping extensions install"
    warn "Run: Shell Command: Install 'code' command in PATH"
fi


echo
success "Setup complete"
warn "Restart your terminal"
