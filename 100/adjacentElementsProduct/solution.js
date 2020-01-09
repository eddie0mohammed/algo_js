const solution = (arr) => {
    let max = Math.min(...arr);

    for (let i = 0; i < arr.length - 1; i++){
        let temp = arr[i] * arr[i + 1];
        if (temp > max){
            max = temp;
        }
    }
    return max;
}

console.log(solution([3, 6, -2, -5, 7, 3]))