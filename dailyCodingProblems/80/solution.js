const solution = (str) => {
    let obj = {
        '2': ['a', 'b', 'c'],
         '3': ['d', 'e', 'f']
    }   

    let arr = str.split('');
    let newArr = [];

    for (let i = 0; i < obj[arr[0]].length; i++){
        for (let j = 0; j < obj[arr[1]].length; j++){
            newArr.push(`${obj[arr[0]][i]}${obj[arr[1]][j]}`);
        }
    }

    return newArr;
    


}

console.log(solution('23'));