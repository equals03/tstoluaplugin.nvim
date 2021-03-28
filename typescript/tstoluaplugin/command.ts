const api = vim.api;
import * as builtin from 'tstoluaplugin/builtin/init';
import * as config from 'tstoluaplugin/config';

function run_command(args: Readonly<{ cmd: string; opts?: string[] }>): void {
    if (!args.cmd) {
        api.nvim_err_writeln('[TsToLuaPlugin]: your command is missing!');
        return;
    }

    const command = builtin[args.cmd];
    if (command != null) {
        command(args.opts);
    }

    const setting = config.values[args.cmd];
    if (setting != null) {
        print(setting);
    }
}

function load_command(cmd: string, ...opts: string[]): void {
    run_command({
        cmd,
        opts,
    });
}

const command = {
    run_command,
    load_command,
};

export = command;
