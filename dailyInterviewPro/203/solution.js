
const solution = (arr) => {

    let max = 0;
    for (let i = 0; i < arr.length - 1; i++){

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] - arr[i] > max){
                max = arr[j] - arr[i];
            }
        }
    }

    return max;
}

console.log(solution([9, 11, 8, 5, 7, 10]));