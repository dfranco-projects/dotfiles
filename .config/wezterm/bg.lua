local BG = {}
local home = os.getenv("HOME")

-- backgrounds
BG.blurred = home .. "/dotfiles/.config/wezterm/assets/bg_blurred.png"
BG.dark_blurred = home .. "/dotfiles/.config/wezterm/assets/bg_dark_blurred.png"

-- set your default background here
BG.default = BG.blurred

return BG