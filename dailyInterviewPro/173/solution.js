
const solution = (arr) => {
    
    let obj = {};
    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    let length = arr.length;
    for (let key in obj){
        if (obj[key] >= Math.floor(length / 2)){
            return key;
        }
    }
    return null;
}


console.log(solution([3, 5, 3, 3, 2, 4, 3]))