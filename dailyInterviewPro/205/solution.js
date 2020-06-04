
const solution = (arr) => {

    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){

            if (!newArr.includes(arr[i] + arr[j])){
                newArr.push(arr[i] + arr[j])
            }
        }
    };

    console.log(newArr);
    let smallest = Math.min(...newArr);
    for (let i = 0; i < Math.max(...newArr); i++){
        // console.log(smallest);
        if (!newArr.includes(smallest)){
            return smallest
        }
        smallest++;
    }
    return smallest
}

console.log(solution([1, 2, 3, 8, 9, 10]))