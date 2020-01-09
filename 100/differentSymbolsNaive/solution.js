const solution = (str) => {

    let newArr = [];
    let arr = str.split('');
    arr.forEach(elem => {
        if (!newArr.includes(elem)){
            newArr.push(elem)
        }
    })
    return newArr.length;
    
}

console.log(solution("cabca"));