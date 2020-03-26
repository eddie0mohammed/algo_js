
class Bit {
    constructor(size){
        this.arr = [];
    }

    set = (i, val) => {
        this.arr[i] = val;
    }

    get = (i) => {
        return this.arr[i];
    }
}

const bit = new Bit();

bit.set(10, 1);

console.log(bit.get(10));