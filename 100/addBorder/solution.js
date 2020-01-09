const solution = (arr) => {
    let len = arr[0].length;

    let str = '';
    for (let i = 0; i < len; i++){
        str += '*';
    }

    // arr.unshift(str);
    // arr.push(str);
    return [str, ...arr, str];
    // return arr;
}

console.log(solution(["abc",
"ded"]))