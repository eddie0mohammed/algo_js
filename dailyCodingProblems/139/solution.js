
const solution = (arr) => {
    let obj = {};

    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    let newArr = [];
    for (let key in obj){
        if (obj[key] === 1){
            newArr.push(key);
        }
    }

    return newArr;
    
}

console.log(solution([2, 4, 6, 8, 10, 2, 6, 10]))