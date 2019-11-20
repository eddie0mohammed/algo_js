const solution = (str, arr) => {

    let newArr = [];
    arr.forEach(elem => {
        if (elem.slice(0, str.length) === str){
            newArr.push(elem);
        }
    });
    return newArr;
}

console.log(solution("de", ["dog", "deer", "deal"]))