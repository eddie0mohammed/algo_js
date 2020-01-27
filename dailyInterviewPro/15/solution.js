const solution = (str) => {

    let arr = str.split('');

    arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === '('){
            count1++;
        }else{
            count2++;
        }
        
    }
    return Math.abs(count1 - count2);
}

console.log(solution('(()()('));