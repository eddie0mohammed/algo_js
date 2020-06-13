
const solution = (arr1, arr2, arr3) => {

    let obj1 = objectify(arr1);
    let obj2 = objectify(arr2);
    let obj3 = objectify(arr3);

    let newArr = [];
    for (let key in obj1){
        if (obj2.hasOwnProperty(key) && obj3.hasOwnProperty(key)){
            newArr.push(key);
        }
    }

    return newArr;
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

console.log(solution([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))