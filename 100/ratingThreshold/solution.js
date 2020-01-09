const solution = (arr, threshold)  => {

    let newArr = [];
    arr.forEach((elem, i) => {
        let temp = elem.reduce((acc, elem) => {
            return acc + elem;
        }, 0);

        if ((temp / elem.length < threshold)){
            newArr.push(i);
        }
    })
    return newArr;

}

console.log(solution([[3, 4],
    [3, 3, 3, 4],
    [1, 4]], 3.5));