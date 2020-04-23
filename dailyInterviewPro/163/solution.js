
const solution = (num) => {

    let newArr = [];
    while (num > 0){
        let closestSquare = findClosestSquare(num);
        // console.log(closestSquare);
        newArr.push(closestSquare);
        num = num - (closestSquare * closestSquare);
    }

    return newArr;


}


const findClosestSquare = (num) => {

    let arr = [];
    for (let i = 1; i <= num; i++){
        arr.push(i);
    }

    let left = arr[0];
    let right = arr[arr.length - 1];

    while (left < right){
        let mid = left + Math.floor((right - left) / 2);
        
        if (mid * mid === num){
            return mid
        }else if (mid * mid > num){
            right = mid;
        }else if (mid * mid < num){
            left = mid + 1;
        }
    }
    return left - 1;
}

console.log(solution(13));