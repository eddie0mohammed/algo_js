const solution = (arr) => {

    let len = arr.length - 1;

    let random = Math.floor(Math.random() * len);
    
    return arr[random];

}

console.log(solution([0,1,2,3,4]));