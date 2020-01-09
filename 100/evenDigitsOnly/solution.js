const solution = (num) => {

    let arr = num.toString().split('');
    return arr.every(elem => {
        if (parseInt(elem) % 2 === 0){
            return true;
        }
    })

}

console.log(solution(2468));
console.log(solution(24681));