const solution = (str) => {
    let arr = str.split('');

    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0) !== 1){
            newArr.push(String.fromCharCode(arr[i].charCodeAt(0) + 1));
        }
    }
    if (newArr.length > 0){
        return newArr[0];
    }
    return undefined;
}

console.log(solution("abcde"));
console.log(solution("abcdefghjklmno"));