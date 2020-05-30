
const solution = (num) => {

    let rev = 0;
    let temp = num;
    while (temp > 0){
        rev = (rev * 10) + (temp % 10);
        temp = Math.floor( temp / 10 )
    }
    
    console.log(rev);
    if (rev === num){
        return true;
    }
    return false;
}

console.log(solution(121));
console.log(solution(122));
console.log(solution(747));