
export type Value = number | string | Value[] | (() => Value)

export function add(...args : Value[]) : number {
    function parseArg(n : Value) {
        if (Array.isArray(n)) return add(...n);
        if (typeof n === "function") return parseArg(n());
        if (typeof n === "string" || typeof n === "number"){
            let v = Number(n)
            return Number.isFinite(v) ? v : 0
        }
        return 0;
    }
    return args.reduce<number>((sum, val) => sum + parseArg(val), 0)
}

