---
description: Toggle the token-saving tools (codegraph, rtk, caveman) on/off or set a mode for this session
argument-hint: "[codegraph|rtk|caveman] [on|off|lite|full|ultra|wenyan]"
allowed-tools: Read, Write, AskUserQuestion
---

# /tokens — token-saver control panel

Control the three token-saving augmentations for THIS session and persist the choice.
All three are **Claude-honored**: there's no kernel-level switch — turning one "off"
means *you (Claude) must stop using it*, starting now and for the rest of the session.

**State file:** `~/.claude/token-tools.json`
```json
{ "codegraph": "on|off", "rtk": "on|off", "caveman": "off|lite|full|ultra|wenyan" }
```

## Steps
1. **Read** `~/.claude/token-tools.json`. If it's missing or unparseable, start from defaults:
   `{ "codegraph": "on", "rtk": "on", "caveman": "off" }`.
2. **If `$ARGUMENTS` is non-empty**, treat it as a direct set: first token = tool
   (`codegraph`|`rtk`|`caveman`), second = value. Validate the value against that tool's
   allowed set (below). Apply it on top of the current state and skip the menu.
3. **Otherwise**, call **AskUserQuestion** with three questions, each pre-selecting the
   current value so it's obvious what's already set:
   - `codegraph`: **on** / **off**
   - `rtk`: **on** / **off**
   - `caveman`: **off** / **lite** / **full** / **ultra** / **wenyan**
4. **Write** the updated JSON back to `~/.claude/token-tools.json` (create it if absent).
5. Print a one-line summary, e.g. `tokens: codegraph=off rtk=on caveman=ultra`, then
   **honor the active config immediately and for the remainder of the session** per the
   rules below.

## Active-config rules
- **codegraph**
  - `off` → Do NOT use codegraph: no `codegraph_explore` MCP tool and no `codegraph` CLI,
    **even if a `.codegraph/` index exists**. This OVERRIDES the global CodeGraph instruction
    for this session — fall back to grep / Read / glob.
  - `on` → Use codegraph normally (prefer it over grep/Read when a `.codegraph/` index exists).
- **rtk**
  - `off` → Do NOT route any work through the `rtk` proxy.
  - `on` → Use `rtk` where it would cut token usage.
- **caveman** (compression level for *your own* responses; see the caveman skill for what
  each level means)
  - `off` → normal prose, no compression.
  - `lite` → drop filler only. `full` → standard caveman. `ultra` → telegraphic.
  - `wenyan` → classical-Chinese-style, shortest.

Keep this interaction terse — the whole point is saving tokens.
