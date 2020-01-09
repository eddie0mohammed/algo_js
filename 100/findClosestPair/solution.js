const solution = (arr, sum) => {

    let newArr = [];
    
    for (let i = 0 ; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === sum){
                newArr.push(Math.abs(i - j));
            }
        }
    }
    console.log(newArr);
    if (newArr.length === 0){
        return -1;
    }
    return Math.min(...newArr);

}

console.log(solution([1, 0, 2, 4, 3, 0], 5));
console.log(solution([2, 3, 7], 8));