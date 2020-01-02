const solution = (arr) => {
    return arr.map(elem => elem * elem).sort((a, b) => a - b);
}

console.log(solution([-5, -3, -1, 0, 1, 4, 5]));