const solution = (arr) => {

    let newArr = [];
    arr.sort((a, b) => a - b);

    let i = arr[0];

    while (i < arr[arr.length - 1]){
        if (!arr.includes(i)){
            newArr.push(i)
        }
        i++;
    }

    return newArr;

}

console.log(solution([1, 3, 5, 7, 9]));