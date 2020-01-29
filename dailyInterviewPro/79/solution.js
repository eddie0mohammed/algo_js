const solution = (numerator, denominator) => {

    let temp = numerator / denominator;

    let arr = temp.toString().split('');
    
    // console.log(arr);
    
    let newStr = '';
    if (Math.abs(temp).toString().length > 3 && arr[0] == 0){
        
        newStr = `${arr[0]}.${arr[2]}(${arr[3]})`;
    }else if (Math.abs(temp).toString().length > 3){
        newStr = `${arr[0]}.(${arr[2]})`;
    }
    else{
        // newStr = arr.join('');
        newStr = temp.toString();
    }
    return newStr;
}

console.log(solution( -3, 2));
console.log(solution(4, 3));
console.log(solution( 1, 6));