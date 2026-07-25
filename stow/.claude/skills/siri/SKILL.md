---
name: siri
description: Use when the user asks for a device action Siri would handle — set a timer or alarm ("set a 10 minute timer", "wake me at 7"), create a reminder ("remind me to…"), control music playback (play, pause, skip, what's playing), system controls (volume, mute, do not disturb, dark mode, wi-fi, bluetooth, battery, brightness, lock screen, sleep), open or quit apps and files, take a screenshot, read/set the clipboard, create Apple Notes ("note that…"), open System Settings panes ("open wallpaper settings"), or control WezTerm (split panes, open/switch tabs, start claude sessions in them).
---

# Siri-style device control

Perform the action immediately, then report exactly what was set ("Timer set for 10 minutes."). Ask only when the request is genuinely ambiguous — never guess AM/PM, and confirm which day a bare weekday means.

## Timers (Clock app)

Convert the duration to whole seconds and pipe it to the `claude-timer` shortcut:

```bash
echo 600 | shortcuts run claude-timer -i -    # 10 minutes
```

## Alarms (Clock app)

Pipe the time as text to `claude-alarm`:

```bash
echo "7:00 AM" | shortcuts run claude-alarm -i -
```

## Reminders

AppleScript. Build dates with `current date` arithmetic — never `date "…"` string literals (locale-dependent):

```bash
osascript \
  -e 'set d to current date' \
  -e 'set hours of d to 17' -e 'set minutes of d to 0' -e 'set seconds of d to 0' \
  -e 'tell application "Reminders" to make new reminder with properties {name:"Call mom", remind me date:d}'
```

- "in 20 minutes" → `set d to (current date) + 20 * minutes`
- a future day → add `n * days` to `current date` before setting hours
- no time given → omit `remind me date`

## Media playback

Target Spotify if running, else Music:

```bash
app=$(pgrep -xq Spotify && echo Spotify || echo Music)
osascript -e "tell application \"$app\" to playpause"    # also: next track / previous track
osascript -e "tell application \"$app\" to name of current track & \" — \" & artist of current track"
```

## System controls

- Volume: `osascript -e 'set volume output volume 40'` (0–100); read: `osascript -e 'output volume of (get volume settings)'`
- Mute / unmute: `osascript -e 'set volume output muted true'` / `… false`
- Do Not Disturb: `shortcuts run claude-dnd-on` / `shortcuts run claude-dnd-off`
- Lock screen: `pmset displaysleepnow`
- Sleep: `pmset sleepnow` — confirm with the user first; it cuts the session.
- Dark mode toggle: `osascript -e 'tell application "System Events" to tell appearance preferences to set dark mode to not dark mode'` (set `to true`/`to false` for explicit)
- Wi-Fi: `networksetup -setairportpower en0 on` / `off`
- Bluetooth: `blueutil -p 1` / `0` — if `blueutil` is missing, offer `brew install blueutil`
- Battery: `pmset -g batt`
- Brightness: needs `brightness` (`brew install brightness`), then `brightness 0.7` (0–1)

## Apps & files

- Open app: `open -a "Safari"`; quit: `osascript -e 'quit app "Safari"'`
- Open file/folder: `open <path>`; reveal in Finder: `open -R <path>`
- Screenshot: `screencapture -x ~/Desktop/screen-$(date +%H%M%S).png`; interactive region/window: `screencapture -i <path>`; add `-c` for clipboard instead of file
- Clipboard: read `pbpaste`; write `printf '%s' "text" | pbcopy`

## Notes

Note bodies are HTML. One-time automation prompt on first use.

```bash
osascript -e 'tell application "Notes" to make new note at folder "Notes" with properties {name:"Title", body:"<div>text</div>"}'
```

Append: `tell application "Notes" to set theNote to first note whose name is "Title"`, then `set body of theNote to (body of theNote) & "<div>more</div>"`.

## System Settings panes

`open "x-apple.systempreferences:<id>"` — IDs verified on this Mac (macOS 26):

| Pane | id |
|---|---|
| Wallpaper | com.apple.Wallpaper-Settings.extension |
| Accessibility (Voice Control lives here) | com.apple.Accessibility-Settings.extension |
| Appearance | com.apple.Appearance-Settings.extension |
| Bluetooth | com.apple.BluetoothSettings |
| Displays | com.apple.Displays-Settings.extension |
| Keyboard | com.apple.Keyboard-Settings.extension |
| Network | com.apple.Network-Settings.extension |
| Notifications | com.apple.Notifications-Settings.extension |
| Sound | com.apple.Sound-Settings.extension |

For another pane, find its id: `defaults read "/System/Library/ExtensionKit/Extensions/<Name>.appex/Contents/Info" CFBundleIdentifier` (list names with `ls /System/Library/ExtensionKit/Extensions/`). Unknown pane → fall back to `open -a "System Settings"`.

## WezTerm

`/opt/homebrew/bin/wezterm cli` — from inside a Claude session, commands default to the pane Claude runs in (`$WEZTERM_PANE`); add `--pane-id N` (ids from `wezterm cli list`) to target another.

- Split pane: `wezterm cli split-pane --bottom --percent 30` (also `--right`/`--left`/`--top`); append `-- /opt/homebrew/bin/claude` to start Claude Code in it; prints the new pane id
- New tab: `wezterm cli spawn` (shell) or `wezterm cli spawn -- /opt/homebrew/bin/claude`; `--cwd <dir>` sets its directory
- Switch tab: `wezterm cli activate-tab --tab-relative 1` (next), `--tab-relative -1` (prev), or `--tab-id N`
- Focus pane: `wezterm cli activate-pane-direction Down` (`Up`/`Left`/`Right`) or `wezterm cli activate-pane --pane-id N`
- Close pane: `wezterm cli kill-pane --pane-id N`
- Overview: `wezterm cli list` — windows, tabs, panes, titles, cwd
- What's running in a pane: take its `tty_name` from `wezterm cli list --format json`, then `ps -t <ttysNNN> -o comm=` — a Claude Code session shows as `claude`
- Run a command in another pane: `printf 'cmd\n' | wezterm cli send-text --no-paste --pane-id N`

## Missing shortcuts

Timers, alarms, and DND require shortcuts named `claude-timer`, `claude-alarm`, `claude-dnd-on`, `claude-dnd-off`. If the one you need is absent from `shortcuts list`, don't fail — run `open -a Shortcuts` and walk the user through creating it as a single-action shortcut:

| Name | Action | Configuration |
|---|---|---|
| claude-timer | Start Timer | duration ← Shortcut Input, unit: seconds |
| claude-alarm | Add Alarm | time ← Shortcut Input |
| claude-dnd-on | Set Focus | turn Do Not Disturb On until turned off |
| claude-dnd-off | Set Focus | turn Do Not Disturb Off |

First AppleScript call to Reminders/Music/Spotify triggers a one-time macOS automation prompt — tell the user to click Allow if nothing seems to happen.
