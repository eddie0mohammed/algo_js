const solution = (arr) => {
    arr.sort((a, b) => a - b);

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let num = [];

    for (let i = 0; i < arr.length - 1; i++){
        if (Math.abs(arr[i + 1] - arr[i] !== 1) && arr[i] + 1 > 0){
            num.push(arr[i] + 1);
        }
    }

    if (num.length === 0){
        return arr[arr.length - 1] + 1;
    }

    return num[0];
}

console.log(solution([3, 4, -1, 1,-3]))
console.log(solution([1, 2, 0]))