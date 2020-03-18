const solution = (n) => {

    if (n < 1){
        return '';
    }else if (n === 1){
        return 1;
    }

    let left = 1;
    let right = n;


    while (left < right){

        let mid = left + Math.floor((right - left) / 2);

        if (mid * mid === n){
            return mid;
        }else if (mid * mid < n){
            left = mid + 1; 
        }else if (mid * mid > n){
            right = mid
        }
    }

    return left - 1;
}

console.log(solution(10));