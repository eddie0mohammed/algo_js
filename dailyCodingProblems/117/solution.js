const solution = (arr) => {

    return arr.map(elem => {
        return elem * elem
    }).sort((a, b) => a - b);
}

console.log(solution([-9, -2, 0, 2, 3]))