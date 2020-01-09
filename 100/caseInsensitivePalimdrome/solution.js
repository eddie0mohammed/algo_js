const solution = (str) => {

    let temp1 = str.toLowerCase();
    let temp2 = temp1.split('').reverse().join('');

    if (temp1 === temp2){
        return true;
    }
    return false;

}

console.log(solution("AaBac"))