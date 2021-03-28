--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local builtin = require("tstoluaplugin.builtin.init")
local config = require("tstoluaplugin.config")
local api = vim.api
local function run_command(args)
    if not args.cmd then
        api.nvim_err_writeln("[TsToLuaPlugin]: your command is missing!")
        return
    end
    local command = builtin[args.cmd]
    if command ~= nil then
        command(args.opts)
    end
    local setting = config.values[args.cmd]
    if setting ~= nil then
        print(setting)
    end
end
local function load_command(cmd, ...)
    local opts = {...}
    run_command({cmd = cmd, opts = opts})
end
local command = {run_command = run_command, load_command = load_command}
local ____exports = command
return ____exports
