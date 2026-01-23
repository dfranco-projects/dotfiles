-- Pull wezterm API
local wezterm = require("wezterm")

-- Hold configuration table
local config = wezterm.config_builder()

-- Set the default font
config.font = wezterm.font("MesloLGS Nerd Font Mono", { weight = "Regular" })

-- Set the font size
config.font_size = 18

-- Disable built-in tab bar
config.enable_tab_bar = false

-- Remove Title but keep Resize on window decorations
config.window_decorations = "RESIZE"

-- Set the color scheme
config.color_scheme = 'Apathy (base16)'

-- Set bg oppacity
config.window_background_opacity = 0.7

-- Set macos bg blur
config.macos_window_background_blur = 10

return config