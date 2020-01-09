function solution(arr){
    let sum1 = 0;
    let sum2 = 0;

    // for (let i = 0; i < arr.length; i++){
    //     if (i % 2 === 0){
    //         sum1 += arr[i];
    //     }else{
    //         sum2 += arr[i];
    //     }
    // }

    arr.forEach((elem, i) => {
        if (i % 2 === 0){
            sum1 += elem;
        }else{
            sum2 += elem;
        }
    }) 
    return [sum1, sum2];
}

console.log(solution([50, 60, 60, 45, 70]))