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
alias ex="exit"
alias cc="claude"

alias login="gcloud auth login"
alias app-login="gcloud auth application-default login"

alias wpp="open https://web.whatsapp.com/"
alias teams="open /Applications/Microsoft\ Teams.app"
alias mail="open /System/Applications/Mail.app"

alias gs="git status"
alias gss="git status --short"
alias ga="git add"
alias gaa="git add --all"
alias gc="git commit"
alias gcm="git commit -m"
alias gco="git checkout"
alias gcb="git checkout -b"
alias gb="git branch"
alias gd="git diff"
alias gds="git diff --staged"
alias gp="git push"
alias gpl="git pull"
alias glg="git log --oneline --graph --decorate"
alias gst="git stash"
alias gwl="git worktree list"
alias gwa="git worktree add"
alias gwr="git worktree remove"

# Open a repo in the browser. No arg = current repo; pass a folder name (looked
# up under $DEV_ROOT, default ~/dev) or a path, e.g. `gho my-repo`. Resolved from
# the repo's own git remote, so the folder name need not match the slug.
_repo_web() {  # <gh|glab> [folder|path]
    local tool="$1" dir="${2:-.}"
    [ -d "$dir" ] || dir="${DEV_ROOT:-$HOME/dev}/$2"
    ( cd "$dir" 2>/dev/null && "$tool" repo view --web ) \
        || { echo "${tool}: not a git repo: ${2:-$PWD}" >&2; return 1; }
}
gho() { _repo_web gh   "$@"; }  # GitHub repo
glo() { _repo_web glab "$@"; }  # GitLab repo

# Open a PR/MR in the browser. No arg = the list; pass a number or branch to
# open a specific one, e.g. `pr 123` / `mr 42`.
pr() {  # GitHub pull request
    if [ -n "$1" ]; then gh pr view "$1" --web; else gh pr list --web; fi
}
mr() {  # GitLab merge request
    [ -n "$1" ] && { glab mr view "$1" --web; return; }
    # glab has no `mr list --web`, so open the project's MR page from the remote.
    local url
    url=$(git remote get-url origin 2>/dev/null) || { echo "mr: not a git repo / no origin" >&2; return 1; }
    url=$(printf '%s' "$url" | sed -E -e 's#^git@([^:]+):#https://\1/#' -e 's#^ssh://git@([^/]+)/#https://\1/#' -e 's#\.git$##')
    open "$url/-/merge_requests"
}

# ---------------------------------- GCLOUD -----------------------------------

if [ -f "$HOME/google-cloud-sdk/path.zsh.inc" ]; then
    source "$HOME/google-cloud-sdk/path.zsh.inc"
fi

if [ -f "$HOME/google-cloud-sdk/completion.zsh.inc" ]; then
    source "$HOME/google-cloud-sdk/completion.zsh.inc"
fi

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

conda_activate() {
    __conda_setup="$('/opt/homebrew/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
    if [ $? -eq 0 ]; then
        eval "$__conda_setup"
    else
        if [ -f "/opt/homebrew/anaconda3/etc/profile.d/conda.sh" ]; then
            . "/opt/homebrew/anaconda3/etc/profile.d/conda.sh"
        else
            export PATH="/opt/homebrew/anaconda3/bin:$PATH"
        fi
    fi
    unset __conda_setup
}

workbench_cli() {
    if [ "$#" -lt 1 ]; then
        echo "Usage: wb <start|stop|status|describe> [instance] [project]"
        return 1
    fi

    local action="$1"
    local instance_name="${2:-workbench-df}"
    local target_project="${3:-ric-eu-aicoe-general-dev-nprd}"

    local original_project
    original_project=$(gcloud config get-value project 2>/dev/null)

    gcloud config set project "$target_project" >/dev/null 2>&1

    if [ "$action" = "status" ]; then
        gcloud workbench instances describe "$instance_name" --location=europe-west3-b | grep state:
        gcloud config set project "$original_project" >/dev/null 2>&1
        return 0
    fi

    gcloud workbench instances "$action" "$instance_name" --location=europe-west3-b
    gcloud config set project "$original_project" >/dev/null 2>&1
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

vscode-extensions-install() {
    local file="$HOME/.config/vscode/extensions.txt"

    if [[ ! -f "$file" ]]; then
        echo "extensions.txt not found: $file"
        return 1
    fi

    grep -vE '^\s*#|^\s*$' "$file" | while read -r ext; do
        echo "Installing $ext"
        code --install-extension "$ext"
    done
}

alias wb="workbench_cli"
alias arc="arc_search"
# alias ff="firefox_search"
alias yt="yt_search"
alias conda-init="conda_activate"

# --------------------------- SYNTAX HIGHLIGHTING -----------------------------

source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# -----------------------------------------------------------------------------
