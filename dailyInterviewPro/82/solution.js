const solution = (...arr) => {
    return arr.reduce((acc, elem) => {
        return acc * parseInt(elem);
    }, 1);
}

console.log(solution('11', '13'));