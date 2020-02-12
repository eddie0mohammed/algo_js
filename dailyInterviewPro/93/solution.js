const solution = (num) => {

    let sign = 1;
    if (num < 0){
        sign = -1;
        num = -num;
    }

    let newNum = 0;
    while (num > 0){

        newNum = (newNum * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    return sign * newNum;
}

console.log(solution(135));
console.log(solution(-321));