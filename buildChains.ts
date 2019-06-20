class HashTable {

  public table:any[];

  constructor(num: number) {
    this.table = new Array(num);
  }

  public buildChains(): void {
      for (let  i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
      }
  }

  public simpleHash(data: string): number {
      const H = 31;
      let total = 0;

      for (let i = 0; i < data.length; i++) {
        total += H *  data.charCodeAt(i);
      }

      total  = total % this.table.length;
      if (total < 0) {
        total = this.table.length -1;
      }
      return total;
  }

  public put(key: string ) {

    const pos = this.simpleHash(key);

    let index = 0;

    if (this.table[pos][index] == undefined) {
        this.table[pos][index] = key;
    } else {
      while (this.table[pos][index] != undefined) {
          ++index;
      }
      this.table[pos][index] = key;
    }
  }

  public getKey(key: string): number | undefined {
          let index = 0;
          let pos = this.simpleHash(key);
          if(this.table[pos][index] = key) {
            return this.table[pos][index];
          } else {
            while (this.table[pos][index] != key)  {
              ++index;
            }
            return this.table[pos][index];
          }
    }
    public showDistro() {
      for (const key in this.table) {
          console.log('key: '  + key +' value: ' + this.table[key]);
      }
    }
}

const hTable = new HashTable(137);

hTable.buildChains();

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
  "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

for (const v of someNames) {
  hTable.put(v);
}

hTable.showDistro();
