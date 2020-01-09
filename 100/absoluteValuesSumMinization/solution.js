const solution = (arr) => {
    let len = arr.length;

    if (len % 2 === 0){
        return arr[(len / 2) - 1];
    }else{
        return arr[(len - 1) / 2];
    }
    

}

console.log(solution([2, 4, 7]));
console.log(solution([2, 4, 7, 6]));
console.log(solution([2, 4, 7, 6, 6]));
console.log(solution([2, 4, 7, 6, 6, 8]));


