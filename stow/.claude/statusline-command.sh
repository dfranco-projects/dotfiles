#!/usr/bin/env bash
# Claude Code status line script
#
# Two color modes:
#   - "tuned"     : hand-built themes (blues, blurred, apathy) use truecolor
#                   overrides hand-picked by the user.
#   - "adaptive"  : wezterm built-in schemes (color_scheme = "...") use basic
#                   ANSI escapes — the terminal re-interprets them with the
#                   active scheme, so the statusline tracks theme changes
#                   without re-rendering.

input=$(cat)
cwd=$(echo "$input" | jq -r '.cwd // .workspace.current_dir // ""')
model=$(echo "$input" | jq -r '.model.display_name // ""')
used_pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')
short_cwd="${cwd/#$HOME/~}"

branch=""
if git -C "$cwd" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  branch=$(git -C "$cwd" symbolic-ref --short HEAD 2>/dev/null            || git -C "$cwd" rev-parse --short HEAD 2>/dev/null)
fi

WEZ_LUA="$HOME/.config/wezterm/wezterm.lua"
RESET=$'\033[0m'
BOLD=$'\033[1m'

# --- Detect theme class ---
THEME_ID="adaptive"
if [ -f "$WEZ_LUA" ]; then
  if grep -q "color_scheme.*Apathy" "$WEZ_LUA"; then
    THEME_ID="apathy"
  elif grep -q "window_background_image" "$WEZ_LUA"; then
    THEME_ID="blurred"
  elif grep -q '#214969' "$WEZ_LUA"; then
    THEME_ID="blues"
  fi
fi

if [ "$THEME_ID" = "adaptive" ]; then
  # Basic ANSI codes — terminal substitutes the active scheme's palette.
  COLOR_DIR=$'\033[36m'      # cyan
  COLOR_BRANCH=$'\033[32m'   # green
  COLOR_MODEL=$'\033[97m'    # bright white
  COLOR_SEP=$'\033[90m'      # bright black (dim gray)
  COLOR_PCT=$'\033[33m'      # yellow
  COLOR_BAR_LOW=$'\033[32m'
  COLOR_BAR_MID=$'\033[33m'
  COLOR_BAR_HIGH=$'\033[31m'
  COLOR_BAR_CRIT=$'\033[31m'
else
  # Tuned palettes per hand-built theme (truecolor)
  fg() {
    local hex="${1#\#}"
    local r=$((16#${hex:0:2}))
    local g=$((16#${hex:2:2}))
    local b=$((16#${hex:4:2}))
    printf '\033[38;2;%d;%d;%dm' "$r" "$g" "$b"
  }

  case "$THEME_ID" in
    blues)
      COLOR_DIR=$(fg "#24EAF7")     # bright cyan
      COLOR_BRANCH=$(fg "#44FFB1")  # mint
      COLOR_MODEL=$(fg "#CBE0F0")   # pale blue-white (foreground)
      COLOR_SEP=$(fg "#214969")     # dark blue-gray
      COLOR_PCT=$(fg "#FFE073")     # yellow
      COLOR_BAR_LOW=$(fg "#44FFB1")
      COLOR_BAR_MID=$(fg "#FFE073")
      COLOR_BAR_HIGH=$(fg "#E52E2E")
      COLOR_BAR_CRIT=$(fg "#E52E2E")
      ;;
    apathy)
      COLOR_DIR=$(fg "#96883E")     # apathy's olive-yellow (base0D)
      COLOR_BRANCH=$(fg "#883E96")  # plum (base0B)
      COLOR_MODEL=$(fg "#D2E7E4")   # near-white (base07)
      COLOR_SEP=$(fg "#031A16")     # near-black (base00)
      COLOR_PCT=$(fg "#3E4C96")     # indigo (base0A)
      COLOR_BAR_LOW=$(fg "#883E96")
      COLOR_BAR_MID=$(fg "#3E4C96")
      COLOR_BAR_HIGH=$(fg "#3E9688")
      COLOR_BAR_CRIT=$(fg "#3E9688")
      ;;
    blurred)
      COLOR_DIR=$(fg "#5555CC")     # blue-purple (default ansi[4])
      COLOR_BRANCH=$(fg "#55CC55")  # green
      COLOR_MODEL=$(fg "#CCCCCC")   # light gray
      COLOR_SEP=$(fg "#000000")     # black
      COLOR_PCT=$(fg "#CDCD00")     # mustard yellow
      COLOR_BAR_LOW=$(fg "#55CC55")
      COLOR_BAR_MID=$(fg "#CDCD00")
      COLOR_BAR_HIGH=$(fg "#CC5555")
      COLOR_BAR_CRIT=$(fg "#CC5555")
      ;;
  esac
fi

# --- Context bar ---
bar=""
if [ -n "$used_pct" ]; then
  used_int=$(printf "%.0f" "$used_pct")
  filled=$(( used_int * 10 / 100 ))
  [ $filled -gt 10 ] && filled=10
  empty=$(( 10 - filled ))

  if [ "$used_int" -le 50 ]; then
    BAR_COLOR="$COLOR_BAR_LOW"
  elif [ "$used_int" -le 75 ]; then
    BAR_COLOR="$COLOR_BAR_MID"
  elif [ "$used_int" -le 90 ]; then
    BAR_COLOR="$COLOR_BAR_HIGH"
  else
    BAR_COLOR="$COLOR_BAR_CRIT"
  fi

  blocks=""
  i=1
  while [ $i -le $filled ]; do
    blocks="${blocks}█"
    i=$((i+1))
  done
  i=1
  while [ $i -le $empty ]; do
    blocks="${blocks}░"
    i=$((i+1))
  done

  bar="${BAR_COLOR}${blocks}${RESET} ${COLOR_PCT}${used_int}%${RESET}"
fi

# --- Assemble left part ---
left=""
if [ -n "$short_cwd" ]; then
  left="${COLOR_DIR}${BOLD}  ${short_cwd}${RESET}"
fi
if [ -n "$branch" ]; then
  if [ -n "$left" ]; then
    left="${left} ${COLOR_BRANCH}  ${branch}${RESET}"
  else
    left="${COLOR_BRANCH}  ${branch}${RESET}"
  fi
fi

# --- Assemble right part (bar first, then model) ---
right=""
[ -n "$bar" ] && right="${bar}"
if [ -n "$model" ]; then
  model_str="${COLOR_MODEL}  ${model}${RESET}"
  if [ -n "$right" ]; then
    right="${right} ${model_str}"
  else
    right="${model_str}"
  fi
fi

sep=" ${COLOR_SEP}|${RESET} "

if [ -n "$left" ] && [ -n "$right" ]; then
  line="${left}${sep}${right}"
elif [ -n "$left" ]; then
  line="$left"
elif [ -n "$right" ]; then
  line="$right"
else
  line=""
fi

# CRITICAL PITFALL AVOIDANCE: Use printf '%s\n' to avoid evaluating % characters in the output
printf '%s\n' "$line"
