const solution = (arr, a, b) => {
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (i == a || j == b){
                sum += arr[i][j];
            }
        }
    }
    return sum;
}

console.log(solution([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3))