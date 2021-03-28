// eslint-disable-next-line no-underscore-dangle, init-declarations
declare let __PluginConfigurationValues: PluginConfiguration;
interface KeyedPluginConfiguration {
    config_value_one: string;
    config_value_two: number;
}
interface PluginConfiguration extends KeyedPluginConfiguration {
    [index: string]: unknown;
}

// eslint-disable-next-line prefer-const
__PluginConfigurationValues = __PluginConfigurationValues ?? {};

interface Config {
    values: PluginConfiguration;
    descriptions: Indexable;

    set_defaults: (this: Config, defaults?: ReadonlyIndexable) => void;
}

function set_defaults(this: Config, defaults?: ReadonlyIndexable): void {
    defaults = defaults || {};

    const get = <T>(name: keyof KeyedPluginConfiguration, default_val: T): T => {
        const found = defaults![name] ?? this.values[name] ?? default_val;
        if (type(found) == type(default_val)) {
            return found as T;
        }

        return default_val;
    };

    this.values.config_value_one = get('config_value_one', 'default_value_for_config_value_one');
    this.values.config_value_two = get('config_value_two', 99);
}

const config: Config = {
    values: __PluginConfigurationValues,
    descriptions: {},
    set_defaults,
};

config.set_defaults();

export = config;
