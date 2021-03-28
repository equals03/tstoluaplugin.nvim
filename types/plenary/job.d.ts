/** @noResolution */
/** @noSelfInFile */
declare module 'plenary.job' {
    type OnStart = () => void;
    type OnStdOut = (error: string, data: string, job?: Job) => void;
    type OnStdError = (error: string, data: string, job?: Job) => void;
    type OnExit = (job: Job, code: number, signal: number) => void;

    type EnvMap = Record<string, string>;
    type Job = {
        start: (this: Job) => void;
        sync: (this: Job, timeout?: number, wait_interval?: number) => LuaMultiReturn<[string[], number]>;
        result: (this: Job) => string[];
    };

    interface Options {
        command: string;
        args?: string[];
        cwd?: string;
        env?: EnvMap | string[];
        skip_validation?: boolean;
        enable_handlers?: boolean;
        on_start?: OnStart;
        on_stdout?: OnStdOut;
        on_stderr?: OnStdError;
        on_exit?: OnExit;
        maximum_results?: number;
        writer?: Job | LuaTable | string;
    }

    interface JobConstructor {
        new: (o: Options) => Job;
    }

    let Job: JobConstructor;

    export = Job;
}
