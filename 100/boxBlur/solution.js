function solution(arr){
    let sum = 0;
    arr.forEach(elem => {
        sum += elem.reduce((acc, elem1) => {
            return acc + elem1;
        }, 0);
    });

    let count = 0;
    arr.forEach(elem => {
        count += elem.length;
    })
    return Math.floor(sum/count);
}

console.log(solution([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]))