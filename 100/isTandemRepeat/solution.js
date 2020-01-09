const solution = (str) => {

    let len = str.length;
    if (len % 2 !== 0)
    return false;
    let half = len / 2;


    // console.log(str.slice(half));
    // console.log(str.slice(-half));
    if (str.slice(half) === str.slice(-half)){
        return true;
    }
    return false;
}

console.log(solution("tandemtandem"));
console.log(solution("qqq"));
console.log(solution("2w2ww"));