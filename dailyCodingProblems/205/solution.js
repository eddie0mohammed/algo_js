
const solution = (arr1, arr2) => {

    let newArr = [];
    for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[arr2[i]]);
    }

    return newArr;

}

console.log(solution(["a", "b", "c"], [2, 1, 0]));