local home = os.getenv("HOME")
local wezterm = require("wezterm")
local config = wezterm.config_builder()

config.font = wezterm.font("MesloLGS Nerd Font Mono")
config.font_size = 16
config.line_height = 1

config.enable_tab_bar = false
config.window_decorations = "RESIZE"

config.background = {
    {
        source = {
        File = home .. "/.config/wezterm/assets/wezterm_bg_blurred.png",
        },
    },
}

config.max_fps = 120
config.native_macos_fullscreen_mode = true

return config
