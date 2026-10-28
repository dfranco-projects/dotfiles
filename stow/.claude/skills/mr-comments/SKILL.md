---
name: mr-comments
description: Use when drafting or posting replies to MR/PR review comments on GitLab or GitHub. Enforces the user's preferred tone and formatting.
---

# MR Comment Style

Apply these rules whenever writing a reply to a code review comment.

## Tone
- **Casual and direct.** Write like a dev on slack who's read the diff. Short, pointed, no ceremony.
- **Lowercase** throughout, including the first word. No sentence-case, no title-case. Exception: "I" is always capitalized.
- **No trailing period.** End sentences naturally without punctuation at the end.
- **Short.** One to two sentences. Say the thing and stop. Don't summarize the reviewer's own comment back at them.
- **One hop max.** Name what's wrong (or what to do), and at most one consequence. Never chain problem → detail → consequence → suggestion. "`get()` returns None for MCP refs, would crash in `load`" is the ceiling. No third layer.
- **Question form when pushing back.** "wouldn't X be enough?" or "do we actually need Y here?" — not "I disagree because X".
- **Human touches.** "imo", "yeah", "nah", "fair point", "tbh", "idk", "thx", "pls" when they fit. Don't force them into every reply.
- **No filler.** No "great catch", "thanks for the review", "I appreciate the feedback". Jump straight to the substance.
- **No hedging.** Don't soften with "probably fine for now", "worth considering", "might be worth a follow-up". Either it matters or it doesn't. If it's a real issue say so flat; if it's not, don't comment.
- **Use backticks freely.** Name the function, param, or class in backticks when it helps the reader locate the thing. The diff is right there — don't dance around code names with vague descriptions.
- **Emojis sparingly.** An occasional emoji is fine when it adds tone (😅, ;), :slight_smile:), but don't force them.
- **Label nitpicks.** If it's minor, say so: "nitpick but maybe..." — don't dress up a style preference as a bug.

## Content
- If the comment is addressed: say what was done, briefly.
- If the fix is already committed and the diff link or previous reply covers it: just say `done` or `done, addressed in <short-hash>`. No need to re-explain what the diff already shows.
- If the comment is acknowledged but deferred: say it's noted and when/where it'll happen.
- If you disagree: say why, concisely. Frame it as a question if possible ("wouldn't X be enough?" vs "I think X is enough").
- If the comment is just an observation ("but ok", "eventually"): a short acknowledgment is fine, or skip it entirely if there's nothing to add.

## Grounding
- **Always verify before drafting.** When a comment references another MR, commit, or code path, read the actual code/diff/merge state before writing the reply. Never infer from context alone.
- If the comment asks "is X the case?", check whether X is actually the case in the current code.
- If the comment references another MR, check whether it's merged and whether the current branch already incorporates it.

## Workflow
- **Always draft first.** Show the user all replies before posting. Never post without explicit approval.
- Post only after the user confirms.

## Triage: when the user asks to "check comments"
When asked to check or review new MR comments, triage each one:
1. **Actionable and correct**: the reviewer is right and the fix is straightforward. Fix it immediately, commit, then draft a reply that includes the short commit hash and a brief note (e.g. "fixed in `abc1234`, switched to is_dev_environment").
2. **Discussion or opinion**: needs the user's judgment. Present it to the user with your take before drafting a reply.
3. **Observation or "but ok"**: no action needed, draft a short acknowledgment or skip.

Fix first, comment second. Don't reply saying "will fix" when you can just fix it and reference the commit.

## Formatting when drafting new review comments
- **No markdown quotes.** Never wrap comments in `>` blockquote syntax. Output plain text so the user can copy-paste directly into the MR comment box without reformatting.
- **Dense is fine.** Two short sentences on one line reads more natural than a line-per-thought layout. Don't spread a single point across multiple lines just for whitespace.

## When reviewing (not replying)
When the user is the reviewer drafting comments on someone else's MR:

- **Code examples are encouraged.** Show the fix when it's short and concrete. A 1-3 line snippet saves the author a round trip.
- **Say the thing, then stop.** Name what's off and at most why it matters. No three-part structure. "no page cap on this loop, could spin forever with a bad server" is a complete comment. If you want to suggest a fix, add a snippet — don't add another paragraph explaining it.
- **Use code names.** The comment is pinned to the code. Name the function, param, or variable directly. Don't rephrase "`get()` returns None" as "the lookup may fail to find a result".
- **Short overall.** Under ~4 lines of prose even with a snippet. If you need more, it's probably two comments.

## Line targeting
- **Verify line numbers against the actual diff** before presenting comments. Use the diff's `@@` hunks and count the `+` lines to determine the correct new-file line number. A comment anchored to the wrong line is confusing and undermines the review.
- **Use line ranges** when a comment applies to a block of code (e.g. a full try/except, a loop, a multi-line expression). Present as `lines X-Y` so the user can pin it to the right range in the review UI. A single line is fine when the comment is truly about one line.

## What NOT to do
- Don't parrot the reviewer's words back.
- Don't write bullet lists or headers in a reply.
- Don't over-explain. The diff is right there.
- Don't use emdashes.
- Don't end with a period.
- Don't write long justifications. If the answer is longer than 3 sentences, you're over-explaining.
- Don't use `>` blockquotes when drafting comments.
- Don't use positional words like "below", "above", "right below", "just above" to reference nearby code. The comment is anchored to a line; the reader can see the context. Just name what the thing does.
- Don't hedge. No "probably fine for now", "worth considering", "could potentially", "might want to". Say it or don't.
- Don't explain how things work internally. "decoding doubles peak memory because the base64 string and decoded bytes both live at the same time" is a lecture. "no size guard on the decode" is a comment.
