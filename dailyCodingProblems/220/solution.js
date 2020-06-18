
const solution = (num) => {

    let arr = [];
    let power = 0;
    for (let i = 1; i <= num; i++){
        let temp = [];
        for (let j = 0; j < arr.length; j++){
            if (isPowerSeven(arr[j])){
                temp.push(arr[j]);
            }
        }
        // console.log(temp);
        let tempSum = temp.reduce((acc, elem) => acc + elem , 0);
        let nextSquare = 7 ** power;

        if (tempSum < nextSquare && arr.length !== 0){
            arr.push(tempSum);
        }else{
            arr.push(nextSquare);
            power++;
        }

    }

    return arr;
}

const isPowerSeven = (num) => {
    const arr = [1, 7, 49];
    if (num % 7 === 0 || arr.includes(num)){
        return true;
    }
    return false;
}

console.log(solution(4));