const solution = (arr) => {

    arr.sort((a, b) => a - b);
    // console.log(arr);

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] - arr[i] !== 1){
            let temp = arr[i] + 1;

            if (temp > 0){
                return temp;
            }
        }
    }
    return arr[arr.length - 1] + 1;

}

console.log(solution([3, 4, -1, 1]));
console.log(solution([1, 2, 0]));