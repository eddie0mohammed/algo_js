const solution = (arr) => {

    let newArr  = [];
    for (let i = arr.length - 1; i > -1; i--){
        if (arr[i - 1] < arr[i]){
            newArr.unshift(arr[i-1]);
        }else{
            newArr.unshift(-1);
        }
    }
    return newArr;
}

console.log(solution([3, 5, 2, 4, 5]))