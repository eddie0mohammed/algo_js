
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
        if (obj[key] > 1){
            return key
        }
    }
}

console.log(solution([1,2,3,4,5,6,7,9, 4]))