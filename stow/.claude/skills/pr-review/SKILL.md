---
name: pr-review
description: Use when asked to review, evaluate, or give feedback on a PR/MR (GitHub or GitLab), a branch, or a diff. Structured review across correctness, time complexity, codebase-pattern consistency, design, security, and tests, with the user's comment style for anything posted.
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

## 3. Review dimensions

Work through each. Skip a dimension only if the diff clearly can't contain it.

**Correctness** — logic errors, boundary values, off-by-one, null handling, error paths, races/concurrency, transaction boundaries, partial-failure states. Before flagging a bug, construct the concrete input/state that triggers it. No trigger, no bug.

**Time & space complexity** — identify the big-O of new algorithms and data access. Flag O(n²) or worse on unbounded input without justification. N+1 queries (query inside a loop that should be batched or eager-loaded). Unbounded memory: full-table loads, caches without eviction, accumulating collections. Missing pagination on list endpoints. Blocking I/O or CPU work on async paths. Hot-path allocations (regex compiled per call, object churn in loops).

**Consistency with codebase patterns** — the change should read like the rest of the repo wrote it. Compare against the step 2 baseline: naming, module placement, how errors/config/logging/DI are done elsewhere, logic that duplicates an existing util. When flagging a deviation, cite the existing pattern with `file:line`.

**Design & architecture** — does this behavior belong where it was put; dependency direction respects the layering; interfaces minimal; abstractions not leaking. Would a maintainer look for this code here?

**Simplicity & scope** — over-engineering, speculative abstraction, config for things that never vary, dead code, drive-by refactors unrelated to the stated intent. If 200 lines could be 50, say so.

**Security** — injection (SQL/command/path), missing authn/authz on new surfaces, secrets in code, unvalidated input at trust boundaries, unsafe deserialization, sensitive data in logs.

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
