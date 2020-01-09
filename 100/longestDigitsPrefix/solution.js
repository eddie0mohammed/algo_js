const solution = (str) => {
    let arr = str.split('');
    let newStr = '';
    for (let i = 0; i < arr.length; i++){
        if (parseInt(arr[i]) >= 0 && parseInt(arr[i]) <= 9){
            newStr += arr[i];

        }
        else{
            return newStr;
        }
    }
    return newStr;

}

console.log(solution("123aa1"))