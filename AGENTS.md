# AGENT.md

This file provides guidance to Antigravity (Google DeepMind's coding assistant) when working with code in this repository.

## What this repo is

A personal macOS (Apple Silicon only) bootstrap that combines:
- **Make** as the user-facing entrypoint (`make install-<component>`)
- **Homebrew Brewfiles** under `brews/` for package sets, split by category
- **GNU stow** for symlinking dotfiles from `stow/` into `$HOME`
- **Bash scripts** under `install/` and `uninstall/` that mirror each other 1:1

There is no build, no test suite, no lint config. "Running" the code means executing make targets that perform side effects on the host machine.

## Common commands

```bash
make help                       # List all targets
make install                    # Full install (init + dev + mac-plugins + browser + terminal + vscode + dotfiles)
make install-<component>        # See Makefile for the full list
make install-browser BROWSER=arc|zen
make install-terminal THEME=<name>   # Themes live in stow/.config/wezterm/themes/
make theme-list                 # List available WezTerm themes
make uninstall                  # Reverses install order via .dotfiles.history
make history                    # Print install history
make clean-history              # Delete .dotfiles.history
```

`make install-dev`, `install-mac-plugins`, `install-browser` all depend on `install-init` (Makefile enforces this).

## Architecture

### Orchestration flow
1. Makefile target runs `chmod +x install/*.sh` then executes the matching script.
2. Each install script sources `install/_base.sh`, which: validates Apple Silicon, ensures Xcode CLT + Homebrew, exports `DOTFILES_DIR`, sources `lib/log.sh` (log/success/warn/error helpers), and defines `install_brewfile`.
3. After the script succeeds, the Makefile appends a timestamped entry to `.dotfiles.history` via `install/_history.sh:log_history`.
4. `make uninstall` (`uninstall/main.sh`) reads `.dotfiles.history` **bottom-up** until it hits a previous `make uninstall` marker, then dispatches to `uninstall/<component>.sh` for each install in reverse order. Components without a matching uninstall script are skipped with a warning.

This history-driven uninstall is the reason every install target ends with a `log_history` line — **forgetting it breaks reverse uninstall**.

### Stow layout
- All dotfiles live under `stow/` and the entire directory is a single stow package named `stow`.
- `install/dotfiles.sh` runs `stow --adopt -t ~ -d . stow` from `DOTFILES_DIR`, so `stow/.config/foo` becomes `~/.config/foo` and `stow/Library/Application Support/...` becomes `~/Library/Application Support/...`.
- `.stowignore` filters out `.DS_Store`, VCS files, build artifacts, etc.

### Brewfile split
- `Brewfile.base` — always installed; CLI essentials (git, ripgrep, fd, fzf, eza, stow, …)
- `Brewfile.dev` — language toolchains, Docker, tmux, IDEs
- `Brewfile.mac-plugins` — UI apps (Rectangle, Stats, Raycast, …)
- `Brewfile.browser` — used only for `BROWSER=zen` (the `arc` path calls `brew install arc` directly in `install/browser.sh`)

### WezTerm theme switching
`install/terminal.sh` does not symlink themes — it **copies** `stow/.config/wezterm/themes/<THEME>/wezterm.lua` over `stow/.config/wezterm/wezterm.lua` (and theme assets into `stow/.config/wezterm/assets/`). Switching themes mutates files that are tracked in git; expect a diff after running it.

## Conventions for adding a new component

To add `make install-foo` cleanly:
1. Create `install/foo.sh` — start with `source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_base.sh"` and `set -e`.
2. Create `uninstall/foo.sh` — source `uninstall/_base.sh` (provides `uninstall_brewfile`).
3. Add the Makefile target, depending on `install-init` if you need Homebrew, and end it with the `log_history "make install-foo"` line so reverse uninstall works.
4. Add `install-foo` to the `.PHONY` line and to the `install` aggregate target if it should be part of the full install.
5. If installing packages, put them in a `brews/Brewfile.foo` rather than calling `brew install` inline (keeps install/uninstall symmetric — `uninstall_brewfile` parses the same file).

## Known issues to be aware of

- **`install/vscode.sh:7`** reads `$DOTFILES_DIR/.config/vscode/extensions.txt`, but the file actually lives at `$DOTFILES_DIR/stow/.config/vscode/extensions.txt`. The script silently warns and exits when the file is missing, so VS Code extensions are currently **not** installed by `make install-vscode`. Fix by prefixing `stow/`.
- **`uninstall/dotfiles.sh:9`** runs `stow --delete .` from `DOTFILES_DIR`, but the install side uses package name `stow` (`stow -d . stow`). The delete invocation does not match and likely no-ops or errors; the `|| true` swallows it.

Flag these if you're touching the surrounding code; don't silently inherit the pattern.

## Constraints

- **Apple Silicon only.** `check_apple_silicon` in `install/_base.sh` hard-exits on `x86_64`. Don't add fallbacks for Intel.
- **macOS only.** Scripts assume `tput`, BSD `tail -r`, `/opt/homebrew`, and `xcode-select`.
- Shell scripts use `set -e` and the logging helpers from `lib/log.sh`. Match that style.
