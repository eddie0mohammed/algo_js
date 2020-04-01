
const solution = (x, arr) => {
    let first = arr.filter(elem => elem < x);
    let mid = arr.filter(elem => elem === x);
    let right = arr.filter(elem => elem > x);


    return [...first, ...mid, ...right];
} 

console.log(solution(10, [9, 12, 3, 5, 14, 10, 10]))