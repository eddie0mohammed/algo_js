const solution = (original, des) => {

    for (let i = 0; i < des.length; i++){
        original = original.filter(elem => {
            return elem !== des[i];
        })
    }

    return original;
}

console.log(solution([3, 5, 1, 2, 2], [2, 3, 5]));

console.log(solution([1, 2, 3, 5, 1, 2, 3], [2, 3]))