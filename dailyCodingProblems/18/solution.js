const solution = (arr, k) => {

    let newArr = [];
    for (let i = 0; i <= arr.length - k; i++){

        let temp = Math.max(...arr.slice(i, i + k));
        console.log(temp);
        newArr.push(temp);
        

    }

    return newArr;
}

console.log(solution([10, 5, 2, 7, 8, 7], 3));