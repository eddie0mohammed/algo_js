const cons = (a,b) => {
    return [a, b];
}

const car = (arr) => {
    return arr[0];
}

const cdr = (arr) => {
    return arr[1];
}

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));