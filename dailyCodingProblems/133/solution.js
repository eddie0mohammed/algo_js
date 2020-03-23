

class init {
    constructor(arr, size){
        this.arr = [...arr];
        this.size = size;
    }

    set = (i, val) => {
        this.arr[i] = val
    }

    get = (i) => {
        return this.arr[i];
    }
}

const newArr = new init([1,2,3], 3);

newArr.set(0, 10);

console.log(newArr.get(0));
console.log(newArr.get(1));
console.log(newArr.get(2));