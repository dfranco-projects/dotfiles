# ---------- Powerlevel10k ----------
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

source /opt/homebrew/share/powerlevel10k/powerlevel10k.zsh-theme
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# ---------- Zsh plugins ----------
source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# ---------- History ----------
HISTFILE=$HOME/.zhistory
SAVEHIST=1000
HISTSIZE=999
setopt share_history
setopt hist_expire_dups_first
setopt hist_ignore_dups
setopt hist_verify

bindkey '^[[A' history-search-backward
bindkey '^[[B' history-search-forward

# ---------- Aliases ----------
alias ls="eza --icons=always"

# ---------- Direnv ----------
eval "$(direnv hook zsh)"

# ---------- FZF ----------
source <(fzf --zsh)

export FZF_DEFAULT_COMMAND="fd --hidden --follow --exclude .git . $HOME"
export FZF_DEFAULT_OPTS="--layout=reverse --inline-info"

export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_CTRL_T_OPTS="
    --walker-skip .git,node_modules,target
    --preview 'bat -n --color=always {}'
    --bind 'ctrl-\:change-preview-window(down|hidden|)'
"

export FZF_ALT_C_COMMAND="fd -t d --hidden --follow --exclude .git . $HOME"
export FZF_ALT_C_OPTS="--preview 'tree -C {}'"
