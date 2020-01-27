const solution = (num) => {

    // let str = num.toString().split('').reverse().join('');

    // if (num.toString() === str){
    //     return true;
    // }
    // return false;


    let arr = [];
    while (num > 0){
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }

    let newNum = arr[0];
    for (let i = 1; i < arr.length; i++){
        newNum = (newNum * 10) + arr[i]; 
    }

    if (newNum === num){
        return true;
    }
    return false;

}

console.log(solution(12221));