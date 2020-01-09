const solution = (matrix, a,b ) => {

    let sum = 0;

    for (let i = 0; i < matrix.length; i++){

        for (let j = 0; j < matrix[i].length; j++){
            if (i == a || j == b){
                sum += matrix[i][j];
            }
        }
    }

    return sum

}

console.log(solution([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3))