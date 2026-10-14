# Global Instructions

Optimize for fast iteration and SWE best practices. Always apply standard software engineering principles.

## Coding Guidelines

### Think before coding
- State assumptions explicitly. If uncertain, ask.
- Present tradeoffs when multiple approaches exist — don't pick silently.
- If something is unclear, stop and name what's confusing.
- Apply best practices. When unclear, search the codebase first, then the internet (official docs, well-regarded sources) — don't guess from training data.
- Critically evaluate what's already done before extending it. Flag broken patterns, dead code, or anti-patterns you notice in the path of the change — don't silently inherit them.

### Modern design & scaffold
Scope: applies to new projects/components. For changes inside existing code, **Surgical changes** wins — match what's there.
- Use current, idiomatic patterns for the language/framework in question — no deprecated APIs, no legacy idioms when a modern equivalent exists.
- Set up a proper scaffold from the start: sane project layout, dependency management, linting/formatting, type checking, tests. Don't ship throwaway structure.
- Prefer the ecosystem's standard tooling over bespoke setups unless there's a concrete reason.
- For version-sensitive APIs (frameworks, SDKs, language stdlib), verify the installed version before writing code — don't rely on training-data recall.

### Simplicity first
- Minimum code that solves the problem. Nothing speculative.
- No features beyond what was asked.
- No abstractions for single-use code; no error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

### Surgical changes
- Don't improve adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style even if you'd do it differently.
- Every changed line should trace directly to the request.

### Goal-driven execution
Transform tasks into verifiable goals. For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
```

### Testing
- Write unit tests for new features and non-trivial logic. Run them before reporting work done.
- E2E tests only when necessary — auth flows, critical user paths, anything crossing process boundaries.
- Don't test trivial code (one-line wrappers, plain getters).
- Match the project's existing test framework and conventions. Don't introduce a new runner.

---

## Git Workflow
*CRITICAL: Before making ANY git commit or push, verify the context:*
1. **Current State:** Run `git branch --show-current` to confirm the target branch. Use `git log --oneline origin/<branch>..HEAD` to check sync status.
2. **Base Branch Validation:** Ensure the branch is based on the correct parent. Do not commit to merged or stale branches.
3. **Commit Messages:** See the `commit-messages` skill (`~/.claude/skills/commit-messages/SKILL.md`) for the authoritative rules on format, scope, body length, and atomic commits. Invoke it whenever authoring a commit.

---

## Claude Code usage
- Call independent tools in parallel in a single message — don't serialize when there are no dependencies.
- Use the Explore sub-agent for broad codebase searches (>3 queries). Use the Plan sub-agent for non-trivial implementation strategy before coding.
- For tasks with >2 steps, maintain a TaskCreate list and mark items done as they complete — don't batch updates.
- Enter plan mode before non-trivial implementation. Get approval before writing code.

---

## Communication

### Defaults
- Be terse. Skip pleasantries. Lead with the answer.
- When I ask "why", explain the cause — don't restate what I already see.
- Show diffs / file:line refs, not paraphrased descriptions of changes.

### Uncertainty
- Distinguish "I checked and it's X" from "likely X". Hedge only when warranted.
- If you guessed, say so. If you ran something, cite the command/output.

### Pushback
- Disagree when you have a reason. Don't capitulate to wrong directions to be agreeable.
- If I'm about to do something destructive or wasteful, flag it before doing it.

---

## CodeGraph toggle

`/tokens codegraph on|off` sets codegraph per repo; state lives in `<repo>/.claude/token-tools.json` (default off) and the `token-tools-apply` SessionStart hook re-applies it. When off, it overrides the **CodeGraph** section below for that repo. If codegraph results are stale, partial, or contradict the actual files, fall back to grep/Read and suggest re-indexing.

<!-- CODEGRAPH_START -->
## CodeGraph

In repositories indexed by CodeGraph (a `.codegraph/` directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tool** (when available): `codegraph_explore` answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them, including dynamic-dispatch hops grep can't follow. Name a file or symbol in the query to read its current line-numbered source. If it's listed but deferred, load it by name via tool search.
- **Shell** (always works): `codegraph explore "<symbol names or question>"` prints the same output.

If there is no `.codegraph/` directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->
