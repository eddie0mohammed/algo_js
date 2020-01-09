const solution = (...arr) => {
    return arr.reduce((acc, elem) => {
        return acc + elem;
    }, 0);
}

console.log(solution(1,2));
console.log(solution(1,2,3,4,5));