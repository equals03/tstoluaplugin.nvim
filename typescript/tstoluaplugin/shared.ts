import * as Job from 'plenary.job';

interface CliArgs {
    readonly cmd: string;
    readonly args?: string[];
}

function cli(args: CliArgs): LuaMultiReturn<[string[], number]> {
    dump(args);
    const job = Job.new({
        command: args.cmd,
        args: args.args,
    });

    const [result, code] = job.sync();

    return $multi(result, code);
}

function dump(...args: unknown[]): void {
    // should work but the transpiler wraps the results in a table
    // which is not what we want in this case
    // const objects = vim.tbl_map(vim.inspect, args);
    // print(unpack(objects));

    // workaround: force the transpiler to NOT wrap the results in a table
    const [unpacked] = unpack(vim.tbl_map(vim.inspect, args));
    print(unpacked);
}

const shared = {
    cli,
    dump,
};

export = shared;
