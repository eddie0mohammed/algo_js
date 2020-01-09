const solution = (legs) => {

    let newArr = [];

    let cats = Math.floor(legs / 4);
    let person = Math.floor(legs / 2);

    return [cats, person].filter(elem => elem !== 0);

}

console.log(solution(6));

console.log(solution(2));