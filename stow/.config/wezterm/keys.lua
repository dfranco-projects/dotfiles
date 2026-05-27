local wezterm = require("wezterm")

local M = {}

function M.apply(config)
	config.keys = {
		-- Word movement (Opt+arrows)
		{ key = "LeftArrow",  mods = "OPT", action = wezterm.action.SendString("\x1bb") },
		{ key = "RightArrow", mods = "OPT", action = wezterm.action.SendString("\x1bf") },

		-- fzf cd widget (Opt+c) — bypass macOS compose that would otherwise produce ©
		{ key = "c", mods = "OPT", action = wezterm.action.SendString("\x1bc") },

		-- Pane navigation (Cmd+Opt+arrows)
		{ key = "LeftArrow",  mods = "CMD|OPT", action = wezterm.action.ActivatePaneDirection("Left") },
		{ key = "RightArrow", mods = "CMD|OPT", action = wezterm.action.ActivatePaneDirection("Right") },
		{ key = "UpArrow",    mods = "CMD|OPT", action = wezterm.action.ActivatePaneDirection("Up") },
		{ key = "DownArrow",  mods = "CMD|OPT", action = wezterm.action.ActivatePaneDirection("Down") },

		-- Splits (Cmd+- horizontal, Cmd+\ vertical)
		{ key = "-",  mods = "CMD", action = wezterm.action.SplitPane{ direction = "Down" } },
		{ key = "\\", mods = "CMD", action = wezterm.action.SplitPane{ direction = "Right" } },

		-- Pane resize (Cmd+Shift+arrows)
		{ key = "LeftArrow",  mods = "CMD|SHIFT", action = wezterm.action.AdjustPaneSize{ "Left", 1 } },
		{ key = "RightArrow", mods = "CMD|SHIFT", action = wezterm.action.AdjustPaneSize{ "Right", 1 } },
		{ key = "UpArrow",    mods = "CMD|SHIFT", action = wezterm.action.AdjustPaneSize{ "Up", 1 } },
		{ key = "DownArrow",  mods = "CMD|SHIFT", action = wezterm.action.AdjustPaneSize{ "Down", 1 } },
	}
end

return M

