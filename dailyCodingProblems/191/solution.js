
const solution = (arr) => {

    for (let i = 0; i < arr.length; i += arr[i]){
        if (arr[i] === 0){
            return false;
        }
    }

    return true;
}

console.log(solution([1, 3, 1, 2, 0, 1]));