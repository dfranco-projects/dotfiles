local wezterm = require("wezterm")

local config = wezterm.config_builder()

config.font = wezterm.font("MesloLGS Nerd Font Mono")
config.font_size = 18

config.enable_tab_bar = false
config.window_decorations = "RESIZE"

config.color_scheme = [[Tokyo Night]]

config.window_background_opacity = 0.8
config.macos_window_background_blur = 10

require("keys").apply(config)

require("tabs").apply(config)

return config
