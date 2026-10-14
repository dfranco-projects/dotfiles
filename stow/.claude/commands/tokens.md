---
description: Toggle codegraph on/off for this project
argument-hint: "[on|off]"
allowed-tools: Read, Write, AskUserQuestion
---

# /tokens — codegraph toggle

Turn codegraph on or off for THIS project and persist the choice. The `token-tools-apply`
SessionStart hook re-applies it in future sessions. Turning it "off" means *you (Claude) must
stop using it*, starting now and for the rest of the session.

**State file (per-project):** `<project-root>/.claude/token-tools.json`, resolved from the
current working directory: `{ "codegraph": "on|off" }`. Missing or unparseable means `off`.

## Steps
1. **Read** the state file.
2. **If `$ARGUMENTS` is `on` or `off`** (optionally prefixed with `codegraph`), use it.
   **Otherwise** ask via **AskUserQuestion** (header `codegraph`), current value first with a
   `🟢` prefix on its label:
   - `on` → "Query the pre-indexed code graph (MCP/CLI) instead of grep/Read — fewer tokens & tool calls on indexed repos."
   - `off` → "Ignore codegraph even if a `.codegraph/` index exists; use grep/Read/glob. Pick if the index is stale or wrong."
3. **Write** `{ "codegraph": "<value>" }` to the state file, creating `.claude/` if needed.
4. Print `tokens: codegraph=<value>` and honor it immediately:
   - `off` → no `codegraph_explore` MCP tool and no `codegraph` CLI, **even if a `.codegraph/`
     index exists**. This OVERRIDES the global CodeGraph instruction for this session.
   - `on` → prefer codegraph over grep/Read when a `.codegraph/` index exists.
