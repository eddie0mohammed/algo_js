const solution = (num) => {
    let len = num.toString().length;
    if (len % 2 !== 0){
        return false;
    }else{
        let first = red(num.toString().slice(0, len / 2));
        let second = red(num.toString().slice(-len /2));

        console.log(first, second);

        if (first === second){
            return true;
        }
        return false;
        
    }



} 

const red = (str) => {
    return str.split('').reduce((acc, elem) => {
        return acc + parseInt(elem);
    }, 0);
}

console.log(solution(1230));
console.log(solution(239017));
