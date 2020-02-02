const solution = (arr, k) => {

    let newArr = [];

    for (let i = 0; i < arr.length - k + 1; i++){
        let temp = arr.slice(i, k + i);
        newArr.push(Math.max(...temp));
        // console.log(temp)

    }
    return newArr;

}

console.log(solution([10, 5, 2, 7, 8, 7], 3))