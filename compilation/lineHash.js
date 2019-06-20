"use strict";
class HashLine {
    constructor(num) {
        this.table = new Array(num);
        this.value = [];
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
        let pos = this.simpleHash(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = key;
            this.value[pos] = key;
        }
        else {
            while (this.table[pos] != undefined) {
                ++pos;
            }
            this.table[pos] = key;
            this.value[pos] = key;
        }
    }
    getKey(key) {
        let pos = this.simpleHash(key);
        if (pos > 0) {
            for (let i = 0; this.table[pos] != undefined; i++) {
                if (this.table[pos] === key) {
                    return this.value[pos];
                }
            }
        }
    }
    showDistro() {
        for (const key in this.table) {
            this.table[key] && console.log('key: ' + key + ' value: ' + this.value[key]);
        }
    }
}
const hLine = new HashLine(137);
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (const v of someNames) {
    hLine.put(v);
}
hLine.showDistro();
// key: 25 value: Raymond
// key: 26 value: Clayton
// key: 34 value: Mike
// key: 44 value: Jonathan
// key: 58 value: David
// key: 68 value: Danny
// key: 119 value: Jennifer
// key: 123 value: Donnie
// key: 126 value: Cynthia
console.log(hLine.getKey('Jennifer'));
//# sourceMappingURL=lineHash.js.map