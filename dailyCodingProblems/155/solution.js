
const solution = (n) => {

    let arr = [];
    for (let i = 1; i <= n; i++){
        arr.push(i);
    }
    let left = 1;
    let right = arr[arr.length - 1];
    let mid;
    while (left < right){
        mid = left + Math.floor((right - left) / 2) 

        if (mid * mid === n){
            break
        }else if (mid * mid > n){
            right = mid;
        }else if (mid * mid < n){
            left = mid + 1;
        }
    }
    let sum = 0;
    let count = 0;
    for (let i = mid; i > 0; i--){
        while (sum < n){
            if ((i * i) + sum <= n){
                sum += (i * i);
                // console.log(i)
                count++;
            }else{
                break;
            }
        }
        
    }
    return count;
}

console.log(solution(13));
console.log(solution(27));
