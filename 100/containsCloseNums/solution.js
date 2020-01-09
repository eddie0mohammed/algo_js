const solution = (arr, k) => {

    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                if (Math.abs(i - j) <= k){
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(solution([0, 1, 2, 3, 5, 2], 3));
console.log(solution([0, 1, 2, 3, 5, 2], 2));