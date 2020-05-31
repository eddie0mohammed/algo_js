
const solution = (arr) => {

    let min = Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

console.log(solution([5, 7, 10, 3, 4]))