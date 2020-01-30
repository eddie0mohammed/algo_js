
const isPrime = (num) => {
    if (num === 0 || num === 1 ){
        return false;
    }else if (num === 2 || num === 3){
        return true;
    }

    let i = 2;
    while (i * i <= num){
        if (num % i === 0){
            return false;
        }
        i++;
    }
    return true;

}

const solution = (num) => {
    
    let newArr = [];

    for (let i = 0; i < num; i++){
        if (isPrime(i)){
            newArr.push(i);
        }
    }

    return newArr;
}

console.log(solution(14));