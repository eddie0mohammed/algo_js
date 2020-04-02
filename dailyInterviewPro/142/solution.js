const solution = (arr) => {

    arr.sort((a, b) => a - b);
    let temp = [];
    for (let i = 0; i < arr.length; i++){
        if (!temp.includes(arr[i])){
            temp.push(arr[i]);
        }
    }
    arr = temp;
    
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] !== arr[i] + 1 && !newArr.includes(arr[i] + 1)){
            newArr.push(arr[i] + 1);
        }
    }

    return newArr;
}

console.log(solution([4, 6, 2, 6, 7, 2, 1]))