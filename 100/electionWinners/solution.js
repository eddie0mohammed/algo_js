const solution = (arr, k) => {
    let max = Math.max(...arr);

    let newArr = [];
    arr.forEach((elem, i) => {
        if ((elem + k) > max){
            newArr.push(i);
        }
    })
    console.log(newArr);
    return newArr.length;

}

console.log(solution([2, 3, 5, 2], 3));