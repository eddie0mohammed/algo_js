

const solution = (arr, q) => {

    let count = 0;;
    for (let i = 0; i < arr.length; i++){
        
        if ((arr[i + 1] < arr[i] && q[i + 1] > q[i]) || (q[i + 1] < q[i] && arr[i + 1] > arr[i])){
            count++;
        }
    }

    return count;
}


let p = [1, 0, 3, 2, 5];
let q = [1, 0,2,3,4];

console.log(solution(p, q));