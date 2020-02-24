const solution = (arr) => {

    let lastIndex = arr.length - 1;

    let i = 0;

    while (i < arr.length && arr[i] !== 0){

        i += arr[i];
        if (i === lastIndex){
            return true;
        }
    }
   
    return false;



}

console.log(solution([1, 1, 0, 1]))
console.log(solution([2, 0, 1, 0]))