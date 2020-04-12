
const solution = (str) => {

    let arr = str.split(' ');
    
    let newArr = arr.map(elem => elem.split('').reverse().join(''));
    return newArr;
}

console.log(solution("The cat in the hat"));