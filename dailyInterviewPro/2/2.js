const solution = (arr) => {
    
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str += arr[i];

    }

    let newArr = (parseInt(str) + 1).toString().split('');
    return newArr.map(elem => parseInt(elem));
}


console.log(solution([2,3,4]))
console.log(solution([0]))