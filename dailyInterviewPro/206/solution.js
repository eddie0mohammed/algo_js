
const solution = (arr) => {

    let count = 0;
    let tallest = 0;
    for (let i = arr.length - 1; i >= 0; i--){
        // if (i === arr.length - 1){
        //     count++;
        // }

        if (arr[i] > tallest){
            count++;
            tallest = arr[i];
            
        }
        
        

    }

    return count;
}

// console.log(solution([1, 2, 1, 5, 4, 1, 2, 1]));
console.log(solution([3, 6, 3, 4, 1]));