const solution = (arr, last) => {
    let newArr = [];

    arr.forEach(elem => {
        if (elem[0] > last && !newArr.includes(elem[1])){
            newArr.push(elem[1]);
        }
    });
    return newArr.sort((a, b) => a - b);

}

console.log(solution([[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]], 461620205));