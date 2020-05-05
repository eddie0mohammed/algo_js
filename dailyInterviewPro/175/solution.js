
const solution = (arr) => {

    let plusOne = false;

    for (let i = arr.length - 1; i >=0; i--){

        if (arr[i] !== 9){
            arr[i] = arr[i] + 1;
            return arr;
        }else{
            arr[i] = 0;
            plusOne = true;
        }
    }

    if (plusOne){
        arr.unshift(1);
    }
    return arr;
}

console.log(solution([9,9,9]));