
const solution = (arr) => {
    
    let obj = {};
    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    for (let key in obj){
        if (obj[key] > Math.floor((arr.length) / 2)){
            return key;
        }
    }

    return ;
}

console.log(solution([1, 2, 1, 1, 2, 2, 2]));