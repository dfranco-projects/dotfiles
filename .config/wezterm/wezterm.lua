local wezterm = require("wezterm")
local config = wezterm.config_builder()
local bg = require("bg")

config.font = wezterm.font("MesloLGS NF")
config.font_size = 16
config.line_height = 1

config.enable_tab_bar = false
config.window_decorations = "RESIZE"
config.window_background_image = bg.default

config.max_fps = 120
config.native_macos_fullscreen_mode = true

return config
