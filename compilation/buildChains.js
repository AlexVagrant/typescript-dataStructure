"use strict";
class HashChains {
    constructor(num) {
        this.table = new Array(num);
    }
    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }
    simpleHash(data) {
        const H = 31;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += H * data.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total = this.table.length - 1;
        }
        return total;
    }
    put(key) {
        const pos = this.simpleHash(key);
        let index = 0;
        if (this.table[pos][index] == undefined) {
            this.table[pos][index] = key;
        }
        else {
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = key;
        }
    }
    getKey(key) {
        let index = 0;
        let pos = this.simpleHash(key);
        if (this.table[pos][index] = key) {
            return this.table[pos][index];
        }
        else {
            while (this.table[pos][index] != key) {
                ++index;
            }
            return this.table[pos][index];
        }
    }
    showDistro() {
        for (const key in this.table) {
            this.table[key].length > 0 && console.log('key: ' + key + ' value: ' + this.table[key]);
        }
    }
}
const hChains = new HashChains(137);
hChains.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (const v of someNames) {
    hChains.put(v);
}
hChains.showDistro();
// key: 25 value: Raymond,Clayton
// key: 34 value: Mike
// key: 44 value: Jonathan
// key: 58 value: David
// key: 68 value: Danny
// key: 119 value: Jennifer
// key: 123 value: Donnie
// key: 126 value: Cynthia
console.log(hChains.getKey('Jennifer'));
//# sourceMappingURL=buildChains.js.map