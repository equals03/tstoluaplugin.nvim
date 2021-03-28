--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local shared = require("tstoluaplugin.shared")
local api = vim.api
local function shell(opts)
    opts = opts or ({})
    if #opts <= 0 then
        print("shell command needs at least one argument.")
        return
    end
    local cmd = __TS__ArrayShift(opts)
    local args = opts
    local result, code = shared.cli({cmd = cmd, args = args})
    if code == 0 then
        shared.dump(result)
    else
        api.nvim_err_writeln(
            string.format("shell command: [%s] returned error code [%s]", cmd, code)
        )
    end
end
local function dump(opts)
    shared.dump(opts)
end
local function not_implemented(opts)
    api.nvim_err_writeln("not yet implemented! it kinda said so in the name :)")
end
local builtin = {shell = shell, dump = dump, not_implemented = not_implemented}
local ____exports = builtin
return ____exports
