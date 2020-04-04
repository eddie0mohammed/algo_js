
const solution = (row) => {

    let triangle = [];
    if (row === 0){
        return triangle
    }
    triangle.push([1]);
    for (let i = 1; i < row; i++){

        let currentRow = [];
        let prevRow = triangle[i - 1];
        currentRow.push(1);
        for (let j = 1; j < prevRow.length; j++){
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        triangle.push(currentRow);
    }

    return triangle[row - 1];
}

console.log(solution(6));