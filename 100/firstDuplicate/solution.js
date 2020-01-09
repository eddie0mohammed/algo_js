const solution = (arr) => {


    let index = [];
    
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){

            if (arr[i] === arr[j]){
                index.push(j);
                
            }
        }
    }
    // console.log(index);
    // console.log(elem);
    if (index.length == 0){
        return -1;
    }
    let minIndex = Math.min(...index);
    // console.log(minIndex);
    return arr[minIndex];
   
}

console.log(solution([2, 1, 3, 5, 3, 2]));
console.log(solution([2, 4, 3, 5, 1]));