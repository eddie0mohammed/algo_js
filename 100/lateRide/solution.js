const solution = (timer) => {

    let hours = Math.floor(timer / 60);
    let min = timer % 60;

    let arr = `${hours}${min}`.split('');
    // console.log(arr);
    return arr.reduce((acc, elem) =>{
        return acc + parseInt(elem);
    }, 0);

}

console.log(solution(240));
console.log(solution(808));