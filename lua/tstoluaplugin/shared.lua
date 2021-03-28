--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local Job = require("plenary.job")
local dump
function dump(...)
    local args = {...}
    local unpacked = unpack(
        vim.tbl_map(vim.inspect, args)
    )
    print(unpacked)
end
local function cli(args)
    dump(args)
    local job = Job:new({command = args.cmd, args = args.args})
    local result, code = job:sync()
    return result, code
end
local shared = {cli = cli, dump = dump}
local ____exports = shared
return ____exports
