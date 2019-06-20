declare class HashChains {
    table: any[];
    constructor(num: number);
    buildChains(): void;
    simpleHash(data: string): number;
    put(key: string): void;
    getKey(key: string): number | undefined;
    showDistro(): void;
}
declare const hChains: HashChains;
declare var someNames: string[];
