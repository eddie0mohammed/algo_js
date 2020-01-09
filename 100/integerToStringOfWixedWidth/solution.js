
const solution = (num, width) => {
    let str = num.toString();
    let len = str.length;
    let newStr;
    if (str.length > width){
        newStr = str.slice(-width);
    }else{
        newStr = str;
        while (newStr.length !== width){
            newStr = '0' + newStr;
        }
    }

    return newStr;

}

console.log(solution(1234, 10));