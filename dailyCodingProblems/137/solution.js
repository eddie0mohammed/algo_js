
const solution = (num) => {
    let arr = [25, 10, 5, 1];
    let count = 0;
    while (num > 0){

        for (let i = 0; i < arr.length; i++){

            if (arr[i] <= num ){
                let temp = Math.floor(num / arr[i]);
                num = num % arr[i];
                count+= temp;
            }
        }
    }
    return count;
}

console.log(solution(9));