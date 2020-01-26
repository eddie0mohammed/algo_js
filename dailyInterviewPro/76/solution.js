const solution = (arr) => {

    let newArr = [];

    for (let i = 0; i < arr.length ; i++){
    
        for (let j = i + 1; j <= arr.length; j++){
            if (arr[j] > arr[i]){
                newArr.push(j);
                // i++;
                break;
            }
            if (j === arr.length){
                newArr.push(-1);
            }
            

        }

    }

    return newArr;



}

console.log(solution([3, 2, 5, 6, 9, 8]))