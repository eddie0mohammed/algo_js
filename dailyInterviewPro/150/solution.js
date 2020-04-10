
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
        newArr.push(key);
    }
    return newArr;
}

console.log(solution([1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 9]))