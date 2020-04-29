var rotate = function(matrix) {
    // Copy the original matrix
    var origMatrix = matrix.slice();
    for(var i=0; i < matrix.length; i++) {
        // Map each row entry to its rotated value
        var row = matrix[i].map(function(elem, index) {
            var k = (matrix.length - 1) - index;
            return origMatrix[k][i];
        });
        console.log(row);
        matrix[i] = row;
    }
    return matrix;
};


console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));