const solution = (current, numberOfDigits) => {

    while (numberOfDigits > 0){
        let len = current.toString().length;

        if (numberOfDigits - len > 0){
            current += 1;
            
        }
        numberOfDigits -= len;
    }

    return current;

}

console.log(solution(1, 5));
console.log(solution(8, 4));