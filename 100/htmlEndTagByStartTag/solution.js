const solution = (str) => {
    
    let arr = str.split(' ');
    let temp = arr[0].split('');
    temp.shift();
    temp.push('>');
    let newArr = temp;

    if (arr.length === 1){
        arr = str.split('');
        arr.shift();
        newArr = arr;
    }
    newArr.unshift('</');

    return newArr.join('');
    


}

console.log(solution("<button type='button' disabled>"));
console.log(solution("<i>"));