const solution = (num) => {
    let arr = [];
    for (let i = 2; i < num; i++){
        if (isPrime(i)){
            arr.push(i);
        }
    }

    return arr;
}

const isPrime = (num) => {
    if (num <= 1){
        return false;
    }
    if (num === 2 || num === 3){
        return true;
    }

    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(solution(14));