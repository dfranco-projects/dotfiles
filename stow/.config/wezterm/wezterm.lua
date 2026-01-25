local wezterm = require("wezterm")
local config = wezterm.config_builder()
local home = os.getenv("HOME")

config.font = wezterm.font("MesloLGS Nerd Font Mono")
config.font_size = 16
config.line_height = 1

config.enable_tab_bar = false
config.window_decorations = "RESIZE"
config.window_background_image = home .. "/.config/wezterm/assets/bg_blurred.png"

config.max_fps = 120
config.native_macos_fullscreen_mode = true

return config
