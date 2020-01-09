const solution = (arr) => {

    let obj = {};
    let check = false;
    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem] += 1;
        }else{
            obj[elem] = 1;
        }
    });

    for (let key in obj){
        if (obj[key] > 1){
            check = true;
        }
    }
    return check;

}

console.log(solution([1, 2, 3, 1]))
console.log(solution([1, 2, 3]))