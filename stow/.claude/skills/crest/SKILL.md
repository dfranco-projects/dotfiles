---
name: crest
description: Drive the Crest browser through its MCP server (`mcp__crest__*` tools). Use when testing or verifying a local web app or UI change in a real browser (localhost pages, clicks, forms, console errors, failed requests, screenshots), or when the user asks to open, read, or act on a web page in Crest.
---

# Crest browser

Crest is the user's browser. Its built-in MCP server lets you open tabs, read pages, click, type, and read console and network output inside the Spaces the user allowed. Tabs open in the background, and Crest marks every tab you touch with your badge, so the user can watch without losing focus.

## Setup check

Run this only when no `mcp__crest__*` tools are loaded.

1. Crest is installed (`brew install --cask crest-browser`; the `crest` cask is an unrelated app) and running. Start it without stealing focus: `open -g --env CREST_BACKGROUND_LAUNCH=1 -a Crest`.
2. The server is registered once per machine. `make install-browser` in the dotfiles repo does it, or run `claude mcp add --scope user --transport stdio crest -- "/Applications/Crest.app/Contents/Helpers/crest-browser" mcp`. The tools load in the next session, so ask the user to restart Claude Code.
3. The user turns on Settings > Agents > Allow agents to use Crest, and enables the `Agent` Space there. Only the user can do this step.

## Testing a local web app

1. `identify` with name `Claude` and color `#D97757`.
2. `list_spaces` and use the Space named `Agent`. It is the Space allowed for agents and holds no logins.
3. Make sure the dev server answers (`curl -sI <url>`); start it in the background if it does not.
4. `open_tab` with the localhost URL and `show: false`. Keep the returned tab id.
5. `wait_for` text you expect on the page. It matches visible page text, not the title.
6. `navigate` with `action: reload`, then `wait_for` again. Console and network records can miss the first load; the reload makes them complete.
7. `take_snapshot` for element `uid`s, then act with `click`, `fill`, `type_text`, `press_key`, `scroll`. Take a fresh snapshot after anything that changes the page, since uids come from the latest snapshot.
8. Check each behaviour under test against the snapshot text: values, counters, messages, enabled state.
9. Collect evidence: `list_console_messages` (every `error` entry is a finding), `list_network_requests` (every status of 400 or above is a finding), and one `screenshot` of the final state. Use `full_page` only when layout below the fold matters.
10. `close_tab` every tab you opened.

Done when every behaviour under test has a pass or fail backed by snapshot text, and the console and network results are reported, including when there are none.

## Reference

- Reachable: `http` and `https` pages (localhost included) in allowed Spaces. Crest's own pages, private windows, and other Spaces stay out of reach.
- `evaluate_script` works only while the user has "Let agents run scripts in pages" turned on. Use it to read state the snapshot does not show; drive the page with snapshot actions.
- A site set to the WebKit engine receives input as script events and reports network entries without status. Ask the user to switch that site to Chromium when a test depends on either.
- Tool count depends on the build: stable 0.8.50 has 20, development 0.8.97 has 29, adding `read_page_text`, `handle_dialog`, `search_history`, `delete_history`, `list_search_providers` and the window openers. Use `read_page_text` to read an article as Markdown when the snapshot tree is too noisy.
- If the user presses Stop on a tab, tools fail for that tab. Report it and continue with other tabs.
