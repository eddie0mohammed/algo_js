
const solution = (str) => {
    
    let obj = {};

    str.split('').forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    return Math.abs(obj['('] - obj[')']);
}

console.log(solution("()())()"));