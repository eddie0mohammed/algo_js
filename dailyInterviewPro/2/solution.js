const solution = (arr) => {

    let num = parseInt(arr.reduce((acc, elem) => {
        return acc + elem;
    }, ''));

    num += 1;
    let newArr = num.toString().split('').map(elem => {
        return parseInt(elem);
    });
    return newArr;

}

console.log(solution([2, 3, 4]));