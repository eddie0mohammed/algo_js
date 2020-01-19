
const solution = (num) => {

    let arr = num.toString().split('');
    
    if (arr.length === 1){
        let temp = 10 - parseInt(arr[0]);
        return arr[0] + temp;
    }
    
}

console.log(solution(1));
console.log(solution(2));