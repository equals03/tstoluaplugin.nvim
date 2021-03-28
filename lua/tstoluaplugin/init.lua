--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local config = require("tstoluaplugin.config")
local function setup(opts)
    local defaults = (opts and (opts.defaults or ({}))) or ({})
    config:set_defaults(defaults)
end
local notmuch = {setup = setup}
local ____exports = notmuch
return ____exports
