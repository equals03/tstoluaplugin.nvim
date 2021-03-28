--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
__PluginConfigurationValues = __PluginConfigurationValues or ({})
local function set_defaults(self, defaults)
    defaults = defaults or ({})
    local function get(name, default_val)
        local found = (function(____lhs)
            if ____lhs == nil then
                return default_val
            else
                return ____lhs
            end
        end)(
            (function(____lhs)
                if ____lhs == nil then
                    return self.values[name]
                else
                    return ____lhs
                end
            end)(defaults[name])
        )
        if type(found) == type(default_val) then
            return found
        end
        return default_val
    end
    self.values.config_value_one = get("config_value_one", "default_value_for_config_value_one")
    self.values.config_value_two = get("config_value_two", 99)
end
local config = {values = __PluginConfigurationValues, descriptions = {}, set_defaults = set_defaults}
config:set_defaults()
local ____exports = config
return ____exports
