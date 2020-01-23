const solution = (arr) => {

    let start = Math.min(...arr);
    let max = Math.max(...arr);

    let newArr = [];
    for (let i = start; i <= max; i++){
        if (!arr.includes(i)){
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(solution([4, 6, 2, 6, 7, 2, 1]));