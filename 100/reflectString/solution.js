const solution = (str) => {

    let arr = str.split('');

    let newArr = arr.map(elem => {
        let x = 'z'.charCodeAt(0) - elem.charCodeAt(0) + 'a'.charCodeAt(0);
        return String.fromCharCode(x);
    })

    return newArr.join('');

}

console.log(solution('abcde'));