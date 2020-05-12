
const solution = (arr) => {

    for (let i = 14; i > 1; i--){
        if (arr.every(elem => elem % i === 0)){
            return i;
        }
        
    }
    return i;
}

console.log(solution([42, 56, 14]));