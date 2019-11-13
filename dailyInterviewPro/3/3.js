const solution = (arr, k) => {
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
        if (obj[key] >= k){
            newArr.push(key);
        }
    }

    return newArr;
}

console.log(solution(["daily", "interview", "pro", "pro", 
"for", "daily", "pro", "problems"], 2));