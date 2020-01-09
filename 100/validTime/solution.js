const solution = (str) => {
    let arr = str.split(':');

    if (!(parseInt(arr[0]) >= 0 && parseInt(arr[0]) <= 23 )){
        return false;
    }
    if (!(parseInt(arr[1]) >= 0 && parseInt(arr[1]) <= 59 )){
        return false;
    }

    return true;
}

console.log(solution('13:00'));
console.log(solution('02:80'));