const solution = (arr) => {

    let count = 0;

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] < arr[i]){
            count++;
        }
    }
    if (count <= 1){
        return true;
    }

    return false;
}

console.log(solution([1, 3, 2]))