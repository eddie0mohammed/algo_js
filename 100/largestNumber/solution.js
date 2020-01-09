const solution = (num) => {

    let str = '';
    for (let i = 0; i < num; i++){
        str += 9;
    }

    return parseInt(str);

}


console.log(solution(2));
console.log(solution(3));