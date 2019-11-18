const solution = (arr) => {
    //find sum of smallest adjacent, then total minus that

    let total = arr.reduce((acc, elem) => {
        return acc + elem;
    }, 0);

    let min = arr[0] + arr[1];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] + arr[i + 1] < min){
            min = arr[i] + arr[i + 1];
        }
    }

    return total - min;

}

console.log(solution([2, 4, 6, 2, 5]));
console.log(solution([5, 1, 1, 5]));