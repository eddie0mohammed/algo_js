
const solution = (arr1, arr2) => {

    let newArr = [];

    let obj = {};
    arr1.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    // console.log(obj);

    for (let key in obj){
        if (arr2.includes(parseInt(key))){
            newArr.push(key);
        }
    }

    return newArr;
}


console.log(solution([4, 9, 5], [9, 4, 9, 8, 4]))
