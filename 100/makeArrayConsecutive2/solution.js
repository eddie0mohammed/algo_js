const solution = (arr) => {

    let newArr = [];
    arr.sort((a, b) => a - b);

    for (let i = arr[0] ; i < arr[arr.length - 1]; i++){
        if (arr.indexOf(i) == -1){
            newArr.push(i);
        }
    }
    return newArr.length ;
    

}

console.log(solution([6, 2, 3, 8]))