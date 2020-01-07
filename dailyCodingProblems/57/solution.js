const solution = (arr, elem) => {
    if (arr.findIndex(elem1 => elem1 === elem) !== -1){
        return arr.findIndex(elem1 => elem1 === elem)
    }

    return null;
}

console.log(solution([13, 18, 25, 2, 8, 10], 8));