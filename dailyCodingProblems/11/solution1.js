
const solution = (arr, prefix) => {

    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i].startsWith(prefix)){
            newArr.push(arr[i]);
        }
    }

    return newArr;

}

console.log(solution(['dog', 'deer', 'deal'], 'de'));
