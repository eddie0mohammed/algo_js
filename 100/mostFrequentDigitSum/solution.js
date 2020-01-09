const solution = (num) => {

    let obj = {};

    while (num > 0){
        let sum = num.toString().split('').reduce((acc, elem) => {
            return acc + parseInt(elem);
        }, 0);

        if (obj.hasOwnProperty(sum)){
            obj[sum]++;
        }else{
            obj[sum] = 1;
        }

        num -= sum;
    }

    let max = 0;
    for (let key in obj){
        if (max < obj[key]){
            max = key; 
        }
    }
    return max;
}

console.log(solution(88));