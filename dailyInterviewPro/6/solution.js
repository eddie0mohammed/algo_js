const solution = (str) => {
    let arr = str.split('/');

    let newArr = arr.filter(elem => {
        return elem !== '.'
    });

    let final = [];

    for (let i = 0; i < newArr.length; i++){
        if (newArr[i + 1] === '..' || newArr[i] === '..'){
            continue;
        }else{
            final.push(newArr[i]);
        }
    }
    return final.join('/');

}

console.log(solution('/Users/Joma/Documents/../Desktop/./../'));