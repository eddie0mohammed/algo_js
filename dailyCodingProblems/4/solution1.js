const cons = (a, b) => {
    return [a, b];
}

const car = (arr) => {
    return arr[0];
}

const cdr = (arr) => {
    return arr[1];
} 

console.log((cons(1, 10)));
console.log((car(cons(1, 10))));
console.log((cdr(cons(1, 10))));