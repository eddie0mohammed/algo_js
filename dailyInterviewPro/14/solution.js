const solution = (num) => {

    // trial 1: using a string
    let str = num.toString();
    let revStr = str.split('').reverse().join('');

    if (str === revStr){
        return true;
    }
    return false;

}


console.log(solution(12345432));