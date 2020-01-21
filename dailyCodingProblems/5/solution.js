const solution = (arr, k) => {

    let obj = {};

    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    let check = false;
    
    for (let i = 0; i < arr.length; i++){
        if (arr.includes(k - arr[i])){
            check = true;
        }
    }

    return check;

}

console.log(solution( [10, 15, 3, 7], 19));