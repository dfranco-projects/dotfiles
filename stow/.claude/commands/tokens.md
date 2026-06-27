---
description: Toggle the token-saving tools (codegraph, rtk, caveman, ponytail) on/off or set a mode for this session
argument-hint: "[codegraph|rtk|caveman|ponytail] [on|off|lite|full|ultra|wenyan]"
allowed-tools: Read, Write, AskUserQuestion
---

# /tokens — token-saver control panel

Control the four token-saving augmentations for THIS project and persist the choice — the
`token-tools-apply` SessionStart hook re-applies it automatically in future sessions.
All four are **Claude-honored**: there's no kernel-level switch — turning one "off"
means *you (Claude) must stop using it*, starting now and for the rest of the session.

**State file (per-project):** `<project-root>/.claude/token-tools.json` — resolve `<project-root>`
from the current working directory. Each repo keeps its own config; there is **no global file**.
```json
{ "codegraph": "on|off", "rtk": "on|off", "caveman": "off|lite|full|ultra|wenyan", "ponytail": "off|lite|full|ultra" }
```

## Steps
1. **Read** `<project-root>/.claude/token-tools.json`. If it's missing or unparseable, start from
   **all-off defaults**: `{ "codegraph": "off", "rtk": "off", "caveman": "off", "ponytail": "off" }`.
2. **If `$ARGUMENTS` is non-empty**, treat it as a direct set: first token = tool
   (`codegraph`|`rtk`|`caveman`|`ponytail`), second = value. Validate the value against that
   tool's allowed set (below). Apply it on top of the current state and skip the menu.
3. **Otherwise**, present the menu via **AskUserQuestion** — one single-select question per
   tool. Mark the **currently-active** value: put it first (so it's the default on Enter) **and
   prefix its label with `🟢`** (e.g. `🟢 off`) so the live state is obvious at a glance; leave the
   other labels unmarked. Give **every option a `description`** that defines what that state does,
   so the meaning shows as you focus it. Use these (keep them tight, one line each):

   **codegraph** (header `codegraph`)
   - `on` → "Query the pre-indexed code graph (MCP/CLI) instead of grep/Read — fewer tokens & tool calls on indexed repos."
   - `off` → "Ignore codegraph even if a `.codegraph/` index exists; use grep/Read/glob. Pick if the index is stale or wrong."

   **rtk** (header `rtk`)
   - `on` → "Route model calls through the rtk proxy to cut token usage."
   - `off` → "Bypass rtk; call models directly. Pick if rtk truncates or degrades replies."

   **caveman** — compresses *your prose* (header `caveman`)
   - `off` → "Normal prose. No output compression."
   - `lite` → "Drop filler words only; full substance kept."
   - `full` → "Standard caveman: terse fragments, ~65% fewer output tokens."
   - `ultra` → "Telegraphic, minimal words. May lose nuance."
   - `wenyan` → "Classical-Chinese style, shortest. Highest risk to clarity."

   **ponytail** — minimizes *the code you write* (header `ponytail`)
   - `off` → "No extra minimalism pressure on code."
   - `lite` → "Trim only obvious over-engineering."
   - `full` → "Standard discipline: reuse > stdlib > one-liner > minimal new code."
   - `ultra` → "Aggressively minimal; one line wherever it holds. Watch for under-building."
4. **Write** the updated JSON to `<project-root>/.claude/token-tools.json`, creating the
   `.claude/` dir if needed.
5. Print a one-line summary, e.g. `tokens: codegraph=off rtk=on caveman=ultra ponytail=full`, then
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
- **ponytail** (minimalism level for the *code you write*; see the ponytail plugin — apply
  its decision ladder: need it? → reuse → stdlib → native → one-liner → minimal new code)
  - `off` → no extra minimalism pressure.
  - `lite` → trim obvious over-engineering. `full` → standard ponytail discipline.
  - `ultra` → aggressively minimal; one line wherever it holds.

Keep this interaction terse — the whole point is saving tokens.
