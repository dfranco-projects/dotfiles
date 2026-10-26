# Coagent protocol

Reference for [SKILL.md](SKILL.md). Bash shell state does not persist between calls: resolve the ledger path once, then write it literally into every later command.

## Ledger path

One ledger per repo and base branch, in `/tmp`, which every worktree can reach:

```bash
repo=$(basename "$(dirname "$(git rev-parse --path-format=absolute --git-common-dir)")")
base=<base-branch>
echo "/tmp/coagent-${repo}-${base//\//-}.md"
```

## Create and join

`set -C` makes the create fail when the file exists, so two sessions joining at once still get one ledger:

```bash
L=/tmp/coagent-<repo>-<base>.md
( set -C; printf '# coagent: %s %s\n\ncreated %s\nformat: <time> <agent> <TYPE> <args>, one line each, append only\n\n## Log\n\n' \
  "<repo>" "<base>" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$L" ) 2>/dev/null || true
printf '%s %s %s\n' "$(date -u +%H:%M:%SZ)" "<agent>" 'JOIN branch=<branch> scope="<scope>"' >> "$L"
```

## Append

Every later line uses the same command:

```bash
printf '%s %s %s\n' "$(date -u +%H:%M:%SZ)" "<agent>" "<TYPE> <args>" >> /tmp/coagent-<repo>-<base>.md
```

## Line types

| Line | Meaning |
|---|---|
| `JOIN branch=<branch> scope="<scope>"` | Register: your branch and what you cover. Scope is a description, not a lock. |
| `LOCK <path>` | Claim a repo-relative file before editing it. |
| `UNLOCK <path>` | Release it. |
| `DONE <short-sha>` | Work committed at that sha, ready for review. |
| `REVIEW <agent> <short-sha> approve` | That agent's work at that sha is approved. |
| `REVIEW <agent> <short-sha> changes <summary>` | Fixes needed; full findings go by `SendMessage`. |
| `MERGE` | Your work is approved and ready to merge. |
| `MSG [@<agent>] <text>` | Free text, optionally addressed to one agent. |

The agent registry is the set of `JOIN` lines. The lock table is derived from `LOCK` and `UNLOCK` lines. Both live in the log because a table edited in place would race with peers' appends.

## Status

Prints joined agents, then held locks as `<path> <holder>`. The first `LOCK` on a path wins until its holder unlocks it, so a `LOCK` that lost a race never counts.

```bash
L=/tmp/coagent-<repo>-<base>.md
grep ' JOIN ' "$L"
awk '$3=="LOCK" && !($4 in h) {h[$4]=$2} $3=="UNLOCK" && h[$4]==$2 {delete h[$4]} END {for (f in h) print f, h[f]}' "$L"
```

## Lock rules

1. Run status. If another agent holds the path, stop: append `MSG @<holder> need <path>: <why>` and `SendMessage` the holder. Wait for their `UNLOCK` or work elsewhere.
2. If a peer's branch already changed the path (`git log --oneline <base>..<peer-branch> -- <path>` prints commits), run `git merge <peer-branch>` first so your edit builds on theirs.
3. Append `LOCK <path>`, then run status again. If status names another holder, a peer won the race: append `UNLOCK <path>` and go back to rule 1.
4. Hold the lock until your change to the file is committed, then `UNLOCK`. A file you locked and left unchanged gets its `UNLOCK` right away.

## Review checklist

Read the peer's branch with `git log <base>..<peer-branch>` and `git diff <base>...<peer-branch>`.

- **Scope**: the diff matches the peer's `JOIN` scope; every changed file outside it has a `LOCK` line from that peer.
- **Conflicts**: `git merge-tree --write-tree <your-branch> <peer-branch>` exits 0. A non-zero exit lists the conflicting files; name them in the review.
- **Correctness**: logic, edge cases, error paths. Apply the `pr-review` skill when the diff is large or risky.
- **Tests**: new behaviour has tests, and the request carried a passing test command.
- **Conventions**: the diff follows the repo's `AGENTS.md` or `CLAUDE.md`.
- **Leftovers**: no debug output, stray files, or commented-out code.

## Merge procedure

Present these to the user with real values and leave running them to the user:

```bash
git worktree list                           # find where <base> is checked out
cd <base-worktree>
git merge --no-ff <branch-a>
git merge --no-ff <branch-b>                # one per agent, in DONE order
<project test command>
git worktree remove <worktree-a>            # one per agent worktree
git branch -d <branch-a>                    # one per agent branch
rm /tmp/coagent-<repo>-<base>.md
```

A merge that stops on conflicts goes to the `resolving-merge-conflicts` skill.

## Example ledger

```
# coagent: shop feat/checkout

created 2026-10-26T09:12:03Z
format: <time> <agent> <TYPE> <args>, one line each, append only

## Log

09:12:03Z shop-a1 JOIN branch=feat/checkout-api scope="payment API endpoints"
09:12:41Z shop-b2 JOIN branch=feat/checkout-ui scope="checkout form UI"
09:14:10Z shop-a1 LOCK src/api/payments.ts
09:15:02Z shop-b2 LOCK src/ui/CheckoutForm.tsx
09:21:37Z shop-b2 MSG @shop-a1 need src/api/payments.ts: export the PaymentResult type
09:23:05Z shop-a1 UNLOCK src/api/payments.ts
09:23:30Z shop-b2 LOCK src/api/payments.ts
09:31:12Z shop-b2 UNLOCK src/api/payments.ts
09:40:48Z shop-a1 DONE 4f2c9ab
09:44:19Z shop-b2 REVIEW shop-a1 4f2c9ab approve
09:52:16Z shop-b2 UNLOCK src/ui/CheckoutForm.tsx
09:52:20Z shop-b2 DONE e81d07c
09:57:02Z shop-a1 REVIEW shop-b2 e81d07c changes empty-cart state renders a blank form
10:04:44Z shop-b2 DONE 9b3e512
10:08:15Z shop-a1 REVIEW shop-b2 9b3e512 approve
10:08:20Z shop-a1 MERGE
10:08:51Z shop-b2 MERGE
```

`shop-b2` appended `MERGE` last, so it presents the merge procedure to its user. Before its `LOCK` at 09:23:30Z it merged `feat/checkout-api`, since rule 2 found commits from `shop-a1` on that file.
