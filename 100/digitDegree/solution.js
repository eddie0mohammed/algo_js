const solution = (num) => {

    let decree = 0;

    while (num.toString().length > 1){
        
        num = num.toString().split('').reduce((acc, elem) => {
            return acc + parseInt(elem);
        }, 0);
        decree++;
    }

    return decree;

}

console.log(solution(5));
console.log(solution(100));
console.log(solution(91));