const solution = (arr, k) => {

    for (let i = 0; i < arr.length; i++){
        let temp = arr[i];
        if (arr.includes(k - temp)){
            return true;
        }
    }
    return false;
}

// NAIVE
// const solution = (arr, k) => {
    
//     for (let i = 0; i < arr.length - 1; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i] + arr[j] === k){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

console.log(solution([10, 15, 3, 7], 17));
console.log(solution([10, 15, 3, 7], 40));