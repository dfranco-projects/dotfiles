local BG = {}
local home = os.getenv("HOME")

-- backgrounds
BG.blurred = home .. "/dotfiles/.config/wezterm/assets/wezterm_bg_blurred.png"
BG.dark_blurred = home .. "/dotfiles/.config/wezterm/assets/wezterm_bg_blurred.png"

-- set your default background here
BG.default = BG.blurred

return BG