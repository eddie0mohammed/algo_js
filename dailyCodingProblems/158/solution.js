
const solution = (str) => {

    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (newArr.includes(arr[i])){
            return arr[i];
        }else{
            newArr.push(arr[i]);
        }
    }

    return '';
}

console.log(solution('abcdd'));