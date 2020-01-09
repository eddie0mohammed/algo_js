const solution = (arr) => {

    let sum = 0;
    let count = 0;
    arr.forEach(elem => {
        if (elem[1] === 1){
            sum += elem[0];
            count++;
        }
    })

    return sum / count;

}

console.log(solution([[3, 1],
    [6, 1],
    [4, 1],
    [5, 1]]));

console.log(solution([[4, 1],
    [4, -1],
    [0, 0],
    [6, 1]]))