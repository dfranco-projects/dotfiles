---
name: coagent
description: Coordinate several Claude Code sessions working one task from separate worktrees through a shared ledger.
argument-hint: "<base-branch> <your scope>"
disable-model-invocation: true
---

# Coagent

Several sessions work one task, each in its own git worktree on its own branch cut from a shared **base branch**. They coordinate through a **ledger**: one append-only file every session reads and writes. The ledger is the source of truth for who works on what, which files are locked, and what is reviewed. `SendMessage` is a nudge that points a peer at the ledger.

[PROTOCOL.md](PROTOCOL.md) holds the ledger path, the template, every line format, the lock rules, the review checklist and the merge commands. Read it before step 1.

## Rules

- Write every ledger line with the append command in PROTOCOL.md. It takes the timestamp from `date -u +%H:%M:%SZ` in the same Bash call, so every timestamp is a real clock reading.
- Change the ledger only by appending with `>>` from Bash. Lines peers append at the same moment then survive; a whole-file rewrite would drop them.
- Locks are advisory: nothing on disk enforces them, so each agent checks before every edit.
- Merging is the user's decision. Present the merge commands and stop.

## 1. Join

1. Run `ListAgents`. Its first line (`This session is <name>`) gives your **agent name**. Get your branch with `git branch --show-current`.
2. Take the base branch and your scope from the arguments. Ask the user for whichever is missing.
3. Resolve the ledger path, create the ledger if it is missing, and append your `JOIN`, all with the commands in PROTOCOL.md.
4. Read the ledger and tell the user who else has joined and what each one covers.

Done when your `JOIN` line is in the ledger and you have reported the peers.

## 2. Work

- Before your first edit to any file, follow the lock rules in PROTOCOL.md. When another agent holds the file, leave it alone, append a `MSG` to the holder, and `SendMessage` them.
- Commit on your branch as you go. `UNLOCK` each file once your change to it is committed.
- Run the status command before every `LOCK` and every commit, and act on new lines that name you.

## 3. Complete

1. Run the project's tests, then commit everything. `git status` is clean.
2. `UNLOCK` every file you still hold, then append `DONE <short-sha>`.
3. Run `ListAgents` and `SendMessage` every joined peer still listed. First line: `<agent> is DONE on <branch> at <short-sha>, please review.` Body: the ledger path and the test command with its result.

Done when your `DONE` line is in the ledger and every live peer has the request.

## 4. Review

Run this when a peer asks for review or a new `DONE` appears.

1. Read the peer's work from your own worktree (branches are shared across worktrees): `git log <base>..<peer-branch>` and `git diff <base>...<peer-branch>`.
2. Apply every item of the review checklist in PROTOCOL.md.
3. Append `REVIEW <peer> <short-sha> approve` or `REVIEW <peer> <short-sha> changes <summary>`, then `SendMessage` the peer the full findings.

A peer that gets `changes` fixes, commits, and repeats step 3 with the new sha.

## 5. Merge

1. Append `MERGE` once every other joined agent has a `REVIEW ... approve` of the sha in your latest `DONE`.
2. When every joined agent has a `MERGE` line, the agent whose `MERGE` came last presents the merge procedure from PROTOCOL.md to its user, filled in with real branches and paths.

Done when the user has the commands.

## Other harnesses

Without `ListAgents` and `SendMessage`, use your branch name as agent name and ask the user to pass review requests to the peer sessions.
