const solution = (row) => {

    if (row === 0){
        return [];
    }

    let triangle = generateTriangle(row);

    return triangle[row - 1];



}


const generateTriangle = (numRows) => {

    let triangle = [];

    triangle.push(1);

    for (let i = 1; i <= numRows; i++){

        let prevRow = triangle[i - 1];
        let newRow = [];

        newRow.push(1);

        for (let j = 1; j < prevRow.length; j++){
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        newRow.push(1);

        triangle.push(newRow);
    }

    return triangle;

}


console.log(solution(6));