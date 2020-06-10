
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
        newArr.push(obj[key].toString());
    }

    return newArr.filter(elem => elem != 1);
}

console.log(solution(['a', 'a', 'b', 'c', 'c', 'c']))