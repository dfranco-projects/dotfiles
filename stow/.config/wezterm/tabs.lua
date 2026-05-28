local wezterm = require("wezterm")

local M = {}

local function basename(path)
	return path:match("([^/]+)/?$") or path
end

local function cwd_of(tab)
	local cwd = tab.active_pane and tab.active_pane.current_working_dir
	if cwd == nil then return nil end
	if type(cwd) == "userdata" then
		cwd = cwd.file_path
	else
		cwd = tostring(cwd):gsub("^file://[^/]*", "")
	end
	if cwd then cwd = cwd:gsub("/$", "") end
	return cwd
end

local function tab_label(tab)
	local cwd = cwd_of(tab)
	if not cwd or cwd == "" then return "~" end
	local home = os.getenv("HOME")
	if home and cwd == home then return "~" end
	return basename(cwd)
end

function M.apply(config)
	config.enable_tab_bar = true
	config.tab_bar_at_bottom = true
	config.use_fancy_tab_bar = false
	config.hide_tab_bar_if_only_one_tab = false
	config.show_new_tab_button_in_tab_bar = false
	config.show_tabs_in_tab_bar = true
	config.tab_max_width = 32

	wezterm.on("format-tab-title", function(tab)
		local label = tab_label(tab)
		local idx = tab.tab_index + 1
		return string.format(" %d  %s ", idx, label)
	end)
end

return M
