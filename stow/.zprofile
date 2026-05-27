# Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

# Pyenv
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"

# Antigravity
export PATH="$HOME/.local/bin:$PATH"
