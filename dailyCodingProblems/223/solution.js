
const solution = (arr) => {

    let min = Math.min(...arr);

    let sumArr = [];
    for (let i = 0; i < arr.length -1; i++){
        let temp = arr[i] + arr[i + 1];
        sumArr.push(temp);
    }

    console.log(sumArr);

    return arr[arr.length - 1] + 1;

}

console.log(solution([1, 2, 3, 10]))