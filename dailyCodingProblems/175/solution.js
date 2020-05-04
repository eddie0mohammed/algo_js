
const solution = (s1, s2) => {

    let arr1 = s1.split('');
    let arr2 = s2.split('');

    let obj = {};

    for (let i = 0; i < arr1.length; i++){
        if (!obj.hasOwnProperty(arr1[i])){
            obj[arr1[i]] = arr2[i];
        }
    }

    let str = '';
    for (let i = 0; i < arr1.length; i++){
        str += obj[arr1[i]];
    }

    if (str !== s2){
        return false;
    }
    return true;
}

console.log(solution('abc', 'bcd'));
console.log(solution('foo', 'bar'));