const solution = (a, b) => {

    let obj_a = objectify(a.split(''));
    let obj_b = objectify(b.split(''));

    let arr = [];

    for (let key in obj_a){
        if (!obj_b.hasOwnProperty(key)){
            return 0;
        }else{
            arr.push(Math.floor(obj_b[key] / obj_a[key]))
        }
    }

    return Math.min(...arr);
    
}


const objectify = (arr) => {
    let obj = {};
    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });
    return obj;
}

console.log(solution('abcdf', 'abccdba'));