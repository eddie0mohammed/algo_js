const solution = (arr1, arr2, target) =>{

    let obj1 = objectify(arr1);
    let obj2 = objectify(arr2);

    for (let key in obj1){
        if (obj2.hasOwnProperty(target - key)){
            return true;
        }
    }
    return false;

}

function objectify(arr){
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

console.log(solution([1, 2, 3], [10, 20, 30, 40], 92));