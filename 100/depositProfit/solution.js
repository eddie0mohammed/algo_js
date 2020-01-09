const solution = (deposit, rate, threshold) => {
    let year = 0;
    while (deposit < threshold){
        deposit = deposit * (1 + (rate / 100));
        year++;
    }
    return year;
}

console.log(solution(100, 20, 170));