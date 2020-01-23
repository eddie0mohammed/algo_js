const solution = (path) => {
    let arr = path.split('/').filter(elem => {
        return elem !== '' && elem !== '.'
    });

    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i + 1] !== '..'){
            newArr.push(arr[i]);
        }
    }
    newArr = newArr.filter(elem => elem !== '..');

    return `/${newArr.join('/')}/`;


    
}

console.log(solution('/Users/Joma/Documents/../Desktop/./../'))