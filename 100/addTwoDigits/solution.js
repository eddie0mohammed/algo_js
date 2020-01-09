const solution = (num) => {
    let temp = num.toString().split('');

    return temp.reduce((acc, elem) => {
        return acc + parseInt(elem);
    }, 0);
}

console.log(solution(29));