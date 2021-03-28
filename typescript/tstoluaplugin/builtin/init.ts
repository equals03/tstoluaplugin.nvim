const api = vim.api;
import * as shared from 'tstoluaplugin/shared';

type Command = (opts?: string[]) => void;

function shell(opts?: string[]): void {
    opts = opts ?? [];
    if (opts.length <= 0) {
        print('shell command needs at least one argument.');
        return;
    }
    // example of the bundle that gets generated to satisfy some js
    // ployfills. look out for lualib_bundle.lua that gets generated.
    const cmd = opts.shift()!;
    const args = opts;

    const [result, code] = shared.cli({
        cmd,
        args,
    });

    if (code == 0) {
        shared.dump(result);
    } else {
        api.nvim_err_writeln(string.format('shell command: [%s] returned error code [%s]', cmd, code));
    }
}

function dump(opts?: string[]): void {
    shared.dump(opts);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function not_implemented(opts?: string[]): void {
    api.nvim_err_writeln('not yet implemented! it kinda said so in the name :)');
}

const builtin: TypedIndexable<Command> = {
    shell,
    dump,
    not_implemented,
};

export = builtin;
