const solution = (arr) => {

    if (arr.length === 0) {
        return '';
    }

    let arr1 = arr[0].split('');
    
    let newStr = '';
    let previous = '';

    for (let i = 0; i < arr1.length; i++){

        previous = newStr;
        newStr += arr1[i];
        if(!arr.every(elem => elem.startsWith(newStr))){
            return previous;
        }
    }

    return newStr;
}

console.log(solution(['ahelloworld', 'xhellokitty', 'hell']))