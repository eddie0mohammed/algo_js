const solution = (arr) => {

    let newArr = [];
    let max = Math.max(...arr);
    for (let i = 1; i <= max; i++){
        if (!arr.includes(i)){
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(solution([4,5,2,6,8,2,1,5]));
console.log(solution([4,5,2,6,8,2,1,5, 10]));