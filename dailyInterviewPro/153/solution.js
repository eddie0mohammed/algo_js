
const solution = (str) => {

    let arr = str.split('');
    let obj = {};

    for (let i = 0; i < arr.length; i++){
        if (obj.hasOwnProperty(arr[i])){
            return arr[i];
        }else{
            obj[arr[i]] = 1;
        }
    }

    return null;
}

console.log(solution('qwertty'));