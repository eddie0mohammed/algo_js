const solution = (arr) => {
    let diff = -1000;

    for (let i = 0; i < arr.length - 1; i++){
        let tempDiff = Math.abs(arr[i] - arr[i + 1]);

        if (tempDiff > diff){
            diff = tempDiff;
        }
    }
    return diff;
}

console.log(solution([2, 4, 1, 20]));