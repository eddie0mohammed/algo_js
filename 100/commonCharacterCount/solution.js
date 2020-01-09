const solution = (str1, str2) => {

    let obj1 = objectify(str1);
    let obj2 = objectify(str2);

    let count = 0;

    for (let key in obj1){
        if (obj2.hasOwnProperty(key)){
            count += Math.min(obj1[key], obj2[key]);
        }
    }
    return count;

}

function objectify(str){
    let obj = {};

    let arr = str.split('');
    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });
    return obj;
}

console.log(solution('aabcc', 'adcaa'));