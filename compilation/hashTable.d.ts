declare class HashTable {
    private table;
    constructor(num: number);
    simpleHash(data: string): number;
    put(data: string): void;
    get(data: string): void;
    showDistro(): void;
}
declare var someNames: string[];
declare var hTable: HashTable;
