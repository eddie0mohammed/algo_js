const solution = (num) => {

    // //recursive
    // if (num == 0 || num == 1){
    //     return 1;
    // }

    // return (num * solution(num - 1));

    //iterative
    let prod = 1;
    while (num > 1){
        prod *= num;
        num--;
    }

    return prod;
}

console.log(solution(5))