function solution(arr){
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++){
       
        if (arr[i] >= arr[i + 1]){
            count += (arr[i] - arr[i + 1]) + 1;
            arr[i + 1] += (arr[i] - arr[i + 1]) + 1;
        }


        // console.log(arr);
    }
    return count;
}

console.log(solution([5, 1, 1]))