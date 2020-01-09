const solution = (year) => {

    if (year % 10 === 0){
        return year / 100;
    }else{
        return Math.floor(year / 100) + 1
    }

}

console.log(solution(1905));
console.log(solution(1700));
console.log(solution(9));
console.log(solution(101));