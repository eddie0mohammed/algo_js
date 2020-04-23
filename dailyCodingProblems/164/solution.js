
const solution = (arr) => {

    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        
        let count = 0
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[i]){
                count++;
            }        
        }
        newArr.push(count);
    }
    return newArr;
}

console.log(solution([3, 4, 9, 6, 1]));