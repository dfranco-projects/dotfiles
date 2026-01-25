if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# ---------------------------- POWERLEVEL10K THEME -----------------------------

source /opt/homebrew/share/powerlevel10k/powerlevel10k.zsh-theme
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet

# ----------------------------------- SQLITE -----------------------------------

export PATH="/opt/homebrew/opt/sqlite/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/sqlite/lib"
export CPPFLAGS="-I/opt/homebrew/opt/sqlite/include"
export PKG_CONFIG_PATH="/opt/homebrew/opt/sqlite/lib/pkgconfig"

# ----------------------------------- CONDA ------------------------------------

# __conda_setup="$('/opt/homebrew/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
# if [ $? -eq 0 ]; then
#     eval "$__conda_setup"
# else
#     if [ -f "/opt/homebrew/anaconda3/etc/profile.d/conda.sh" ]; then
#         . "/opt/homebrew/anaconda3/etc/profile.d/conda.sh"
#     else
#         export PATH="/opt/homebrew/anaconda3/bin:$PATH"
#     fi
# fi
# unset __conda_setup

# ------------------------------------ NVM -------------------------------------

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# -------------------------------- ZSH PLUGINS ---------------------------------

source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# ---------------------------------- HISTORY -----------------------------------

HISTFILE=$HOME/.zhistory
SAVEHIST=10000
HISTSIZE=10000

setopt share_history
setopt hist_expire_dups_first
setopt hist_ignore_dups
setopt hist_verify

bindkey '^[[A' history-search-backward
bindkey '^[[B' history-search-forward

# ---------------------------------- ALIASES -----------------------------------

alias ls="eza --icons=always"
alias ll="eza -l --icons=always"
alias la="eza -la --icons=always"
alias cl="clear"
alias wpp="open https://web.whatsapp.com/"
alias teams="open /Applications/Microsoft\ Teams.app"
alias mail="open /Applications/Microsoft\ Outlook.app"

# ---------------------------------- DIRENV -----------------------------------

eval "$(direnv hook zsh)"

# ----------------------------------- FZF -------------------------------------

export FZF_DEFAULT_COMMAND="fd --hidden --follow --exclude .git . ~"
export FZF_DEFAULT_OPTS="
    --layout=reverse
    --inline-info
"

export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_CTRL_T_OPTS="
    --walker-skip .git,node_modules,target
    --preview 'bat -n --color=always {}'
    --bind 'ctrl-\:change-preview-window(down|hidden|)'
    --header 'Press CTRL-\ to change preview window'
"

export FZF_ALT_C_COMMAND="fd -t d --hidden --follow --exclude .git . ~"
export FZF_ALT_C_OPTS="
    --walker-skip .git,node_modules,target
    --preview 'tree -C {}'
"

export FZF_CTRL_R_OPTS="
    --bind 'ctrl-y:execute-silent(echo -n {2..} | pbcopy)+abort'
    --color header:italic
    --header 'Press CTRL-Y to copy command into clipboard'
"

source <(fzf --zsh)

# -------------------------------- FUNCTIONS ----------------------------------

arc_search() {
    if [ "$#" -eq 0 ]; then
        open -a /Applications/Arc.app
    else
        local query="$*"
        open -a /Applications/Arc.app "https://www.google.com/search?q=${query// /+}"
    fi
}

# firefox_search() {
#   if [ "$#" -eq 0 ]; then
#     open -a /Applications/Firefox.app
#   else
#     local query="$*"
#     open -a /Applications/Firefox.app  "https://duckduckgo.com/?q=${query// /+}"
#   fi
# }

yt_search() {
    if [ "$#" -eq 0 ]; then
        open -a /Applications/Arc.app "https://www.youtube.com"
    else
        local query="$*"
        open -a /Applications/Arc.app "https://www.youtube.com/results?search_query=${query// /+}"
    fi
}

theme() {
  local wezterm_dir="$HOME/.config/wezterm/themes"
  local selection

  selection=$(find "$wezterm_dir" -mindepth 1 -type d -exec basename {} \; | fzf)

  [[ -z "$selection" ]] && return 1

  (
    cd "$HOME/dotfiles" || return 1
    make terminal THEME="$selection"
  )
}

alias arc="arc_search"
# alias ff="firefox_search"
alias yt="yt_search"

# --------------------------- SYNTAX HIGHLIGHTING -----------------------------

source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# -----------------------------------------------------------------------------
