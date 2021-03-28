import * as config from 'tstoluaplugin/config';

function setup(opts?: { defaults: ReadonlyIndexable }) {
    const defaults = opts ? opts.defaults ?? {} : {};

    config.set_defaults(defaults);
}

const notmuch = {
    setup,
};

export = notmuch;
