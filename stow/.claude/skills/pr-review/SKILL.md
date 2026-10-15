---
name: pr-review
description: Use when asked to review, evaluate, or give feedback on a PR/MR (GitHub or GitLab), a branch, or a diff. Structured review across correctness, concurrency, data loss, regressions, complexity, resource limits, security, deploy safety, operability, codebase-pattern consistency, design, and tests, with the user's comment style for anything posted.
---

# PR/MR Review

Review like a strong senior engineer: find real problems, prove them with evidence, skip the noise.

## 1. Scope the diff

- GitHub: `gh pr view <n>` + `gh pr diff <n>`. GitLab: `glab mr view <iid>` + `glab mr diff <iid>`.
- Local branch: `git diff <base>...HEAD` (three-dot merge-base, not two-dot).
- Never check out the branch just to review it. Inspect files at the head ref with `git show <ref>:<path>` when needed.
- Read the PR/MR description and commit messages first. Establish what the change is *trying* to do before judging how it does it. Review only what this PR introduces, not pre-existing state.

## 2. Establish the codebase baseline

The diff alone is not enough context. Review the change against the repo it lives in:

- Read the surrounding code of every non-trivial hunk: the whole function/class, not just changed lines.
- Find how the repo already solves similar problems (naming, layering, error handling, test layout). Grep for sibling implementations before judging a new one.
- Read the repo's stated conventions if present: `CLAUDE.md`, `CONTRIBUTING.md`, `docs/`, lint/format configs. A convention you can cite beats an opinion.
- Check recent history of each changed file: `git log --oneline -10 -- <file>`. Recent changes to the same area are high-signal.

## 3. Review dimensions

Work through each. Skip a dimension only if the diff clearly can't contain it.

**Correctness** — logic errors, boundary values, off-by-one, null handling, error paths, races/concurrency, transaction boundaries, partial-failure states. Before flagging a bug, construct the concrete input/state that triggers it. No trigger, no bug.

**Concurrency** — ask "what if two requests hit this at the same instant?" Check-then-act without a lock or atomic op (TOCTOU), SELECT-then-INSERT without a unique constraint, startup code that runs on every instance without an idempotent guard, shared mutable state (module-level dicts, singletons, class caches) touched by concurrent requests, locks without a TTL. On async paths: sync I/O or CPU work blocking the event loop, fan-out that one failure kills, awaits on external calls without a timeout.

**Data loss & correctness over time** — trace the data from write through storage to every read path. Delete-all + re-insert that drops fields a partial update didn't send, two read paths that can disagree (cache vs DB), `ON CONFLICT DO NOTHING` swallowing writes the caller expected, silent truncation, stored vs displayed vs exported formats drifting apart, enum members or config keys deleted while stored rows still hold them.

**Regressions** — the check reviewers most often skip. For each removed block of non-trivial code, find why it was added: `git log -1 -p -S "<distinctive line>" -- <file>`. A guard, null check, error handler or flag added by an earlier change needs a reason to go. If the branch has a merge commit, check the conflict resolution didn't drop either side.

**Time & space complexity** — identify the big-O of new algorithms and data access. Flag O(n²) or worse on unbounded input without justification. N+1 queries (query inside a loop that should be batched or eager-loaded). Unbounded memory: full-table loads, caches without eviction, accumulating collections. Missing pagination on list endpoints. Blocking I/O or CPU work on async paths. Hot-path allocations (regex compiled per call, object churn in loops).

**Consistency with codebase patterns** — the change should read like the rest of the repo wrote it. Compare against the step 2 baseline: naming, module placement, how errors/config/logging/DI are done elsewhere, logic that duplicates an existing util. When flagging a deviation, cite the existing pattern with `file:line`.

**Design & architecture** — does this behavior belong where it was put; dependency direction respects the layering; interfaces minimal; abstractions not leaking. Would a maintainer look for this code here?

**Simplicity & scope** — over-engineering, speculative abstraction, config for things that never vary, dead code, drive-by refactors unrelated to the stated intent. If 200 lines could be 50, say so. Watch for AI-generated clutter: comments narrating what the code does, multi-line docstrings on trivial methods, try/except a global handler already covers, defensive checks for states the call site can't produce.

**Naming** — misleading names (a `get_*` that mutates, a bool param whose `True` meaning isn't obvious), the same concept named two ways within the PR, constants that should be enum members.

**Resource limits** — work out the worst case: max concurrent requests × max payload vs instance memory. Request bodies or uploads read without a server-side size limit (frontend limits are bypassable), compressed input checked only by compressed size (decompression bombs), queries without a LIMIT, file handles, connections or temp files not cleaned up on error paths.

**Security** — injection (SQL/command/path), missing authn/authz on new surfaces, unscoped queries (can user A read user B's rows? check the WHERE clause), cache keys missing the user identity, endpoints that skip frontend-only validation when called directly, user-uploaded files served without `Content-Disposition`, secrets in code, unvalidated input at trust boundaries, unsafe deserialization, sensitive data in logs or error messages.

**Deploy safety** — ask "what happens while old and new instances both serve traffic?" Migrations that take long exclusive locks on big tables, code that assumes the new schema before the migration ran, removed or renamed API fields that existing clients still send, new env vars or secrets nobody provisioned, container start commands that no longer match the build output.

**Operability** — ask "if this fails at 3am, how does on-call find out and what do they do?" New external dependencies without timeouts, retries or a fallback, new caches without an eviction policy, INFO logs that fire on every request, new failure modes with no metric or log.

**Tests** — new behavior has tests in the same PR; tests assert behavior, not implementation; failure paths and edges covered; the tests would actually fail if the code were wrong.

**Docs** — user-facing or contract changes update the relevant README/API docs/migration notes.

## 4. What NOT to flag

- pre-existing issues in unchanged code (one line of context at most, never a finding)
- anything a linter/formatter/type checker already catches
- style preferences with no citable repo convention behind them
- micro-optimizations on cold paths (startup, migrations, admin tooling)
- theoretical scale problems with no evidence the input actually grows
- speculative hardening for requirements nobody stated

Confidence bar: if you're less than ~80% sure a finding is real *and* matters, drop it or downgrade it to a question.

## 5. Severity and evidence

Every finding needs `file:line` plus either a concrete failure scenario or a cited convention/pattern it violates. No evidence, no finding.

- **blocking** — bug, security hole, data loss, broken contract. Must fix before merge.
- **should** — real problem worth fixing now, not merge-blocking: perf smell, pattern deviation, missing test.
- **nit** — minor, author's call entirely.
- **q** — genuine question where intent is unclear. Not a veiled demand.

End with a verdict: `ready` / `ready with fixes` / `not ready`, plus one sentence why.

## 6. Report format (terminal)

Findings grouped by severity, each as `severity — file:line — one-line claim` with a short explanation under it. Then the draft comments (section 7) grouped by file. If something in the PR is genuinely well done, one short note; don't pad with praise.

## 7. Comment style (anything posted)

Comments are written in the user's voice:

- lowercase everything, including the first word. Exceptions: "I", and code identifiers keep their real casing in backticks (`AuthManager`, `useQuery`). Referring to components loosely or shortened is fine as long as it's unambiguous
- short: 1 to 3 sentences. The diff is right there, don't over-explain
- no em-dashes. No trailing period on the last sentence
- chill, like slack. Sparing human touches ("imo", "tbh", "yeah", "fair") where natural, never forced into every comment
- no filler ("great work", "thanks for the PR"), no parroting the code back at the author
- prefix by severity: `blocking:`, `nit:`, `q:`. Should-level comments get no prefix
- head each draft with the exact `file:line` (or `file:start-end` range) it anchors to — that's the line the inline comment gets posted on, so posting needs no re-derivation
- for small concrete fixes, attach a ` ```suggestion ` block instead of describing the edit

Examples of the voice:

> blocking: this fires a query per user in the loop, batch it or use the eager load like `UserService.list_with_roles` does

> this is O(n²) on the members list, fine today but this endpoint takes org-wide input. a set lookup gets it to O(n)

> nit: rest of the repo names these `*_repository`, this one's `*_store`

> q: is the retry here intentional? upstream already retries 3 times so this compounds to 9 calls

## 8. Posting

- Draft everything first and show the user, grouped by file. Never post without explicit approval.
- GitHub: `gh pr review <n> --comment -b "<summary>"`; inline comments via `gh api repos/{owner}/{repo}/pulls/<n>/comments` with `commit_id`, `path`, `line`.
- GitLab: `glab mr note <iid> -m "<summary>"`; inline via `glab api "projects/:id/merge_requests/<iid>/discussions"` with a `position` payload (`base_sha`, `head_sha`, `start_sha`, `new_path`, `new_line`).
- Approve or request changes only when the user explicitly says so.
