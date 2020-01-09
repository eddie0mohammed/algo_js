const solution = (arr ) => {

    let total = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            return total;

        }else{
            total += arr[i];
        }
    }
    return total;

}

console.log(solution([5, 1, 2, 3, 0, 1, 5, 0, 2]))