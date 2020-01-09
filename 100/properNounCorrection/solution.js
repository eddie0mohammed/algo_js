const solution = (str) => {
    let arr = str.toLowerCase().split('');

    let temp = arr.slice(0, 1);
    let rest = arr.slice(1);


    return temp.join('').toUpperCase() + rest.join('');

}

console.log(solution('pARIS'));