
const solution = (str) => {

    let obj = {};
    str.split('').forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    let count = 0;
    for (let key in obj){
        if (obj[key] % 2 !== 0){
            count++;
        }
    }
    if (count > 1){
        return false;
    }
    return true;
}

console.log(solution('carrace'));
console.log(solution('daily'));