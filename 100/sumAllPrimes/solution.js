const solution = (num) => {

    let sum = 0;
    for (let i = 2; i <= num; i++){
        if (isPrime(i)){
            sum += i;
        }
    }

    return sum;

}

function isPrime(num){

    let i = 2;

    while (i * i <= num){
        if (num % i === 0){
            return false;
        }
        i++
    }

    return true;
}

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(17));

console.log(solution(10));
console.log(solution(977));
