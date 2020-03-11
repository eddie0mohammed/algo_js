
const solution = (arr) => {
    return arr.map(elem => {
        return elem * elem
    }).sort((a, b) => a- b);
}

console.log(solution([0, 1, 1, 9, 16, 25, 25]))