const solution = (str) => {

    let rev = str.split('').reverse().join('');

    if (rev == str){
        return true;
    }
    return false;

}

console.log(solution('aabaa'));
console.log(solution('aabac'));
console.log(solution('a'));
console.log(solution('aabaA'));