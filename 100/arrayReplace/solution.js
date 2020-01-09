const solution = (arr, a, b) => {
    // return arr.map(elem => {
    //     if (elem === a){
    //         return b;
    //     }else{
    //         return elem;
    //     }
    // })
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === a){
            arr[i] = b;
        }
    }
    return arr;
}

console.log(solution([1, 2, 1], 1, 3))