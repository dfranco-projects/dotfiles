---
name: siri
description: Use when the user asks for a device action Siri would handle — set a timer or alarm ("set a 10 minute timer", "wake me at 7"), create a reminder ("remind me to…"), control music playback (play, pause, skip, what's playing), or system controls (volume, mute, do not disturb, lock screen, sleep).
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

## Missing shortcuts

Timers, alarms, and DND require shortcuts named `claude-timer`, `claude-alarm`, `claude-dnd-on`, `claude-dnd-off`. If the one you need is absent from `shortcuts list`, don't fail — run `open -a Shortcuts` and walk the user through creating it as a single-action shortcut:

| Name | Action | Configuration |
|---|---|---|
| claude-timer | Start Timer | duration ← Shortcut Input, unit: seconds |
| claude-alarm | Add Alarm | time ← Shortcut Input |
| claude-dnd-on | Set Focus | turn Do Not Disturb On until turned off |
| claude-dnd-off | Set Focus | turn Do Not Disturb Off |

First AppleScript call to Reminders/Music/Spotify triggers a one-time macOS automation prompt — tell the user to click Allow if nothing seems to happen.
