const solution = (arr) => {
    let init = 2;

    while (!arr.every(elem => {
        return elem % init !== 0;
    })){
        init++;
    }
    return init;
}


console.log(solution([5, 3, 6, 7, 9,8]))