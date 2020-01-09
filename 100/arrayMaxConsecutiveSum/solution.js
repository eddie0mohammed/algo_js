const solution = (arr, k) => {
    let max = 0;
    for (let i = 0; i < arr.length - k; i++){

        let temp = 0;
        for (let j = i; j < i + k; j++){
            temp += arr[j];
        }
        if (temp > max)
            max = temp;
    }

    return max;
}

console.log(solution([2, 3, 5, 1, 6], 2))