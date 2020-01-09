const solution = (divisor, bound) => {

    let x = bound;

    while (x > 0){
        if (x % divisor == 0){
            return x;
        }else{
            x--;
        }
    }

    return x;
}

console.log(solution(3, 10));