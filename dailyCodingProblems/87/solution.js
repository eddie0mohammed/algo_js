const solution = (num1, num2) => {

    let count = 0;

    let i = 0;
    while (i < num1){

        i += num2;
        if (i < num1){
            count++;

        }
    }

    return count;

}

console.log(solution(10, 3));