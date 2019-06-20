declare class HashLine {
    private table;
    private value;
    constructor(num: number);
    simpleHash(data: string): number;
    put(key: string): void;
    getKey(key: string): number | undefined;
    showDistro(): void;
}
declare const hLine: HashLine;
declare var someNames: string[];
