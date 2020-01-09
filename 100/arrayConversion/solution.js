const solution = (arr) => {
    let iteration = 1;

    while (arr.length > 1){
        if (iteration % 2 !== 0){
            //sum pair consecutive elements
            arr = sumPair(arr);
            console.log(arr);

        }else{
            //product pair of consecutive elements
            arr = productPair(arr);
            console.log(arr);
     }
    iteration++;
    }
    return arr[0];
}

function sumPair(arr){
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i += 2){
        newArr.push(arr[i] + arr[i + 1]);

    }
    return newArr;
}

function productPair(arr){
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i += 2){
        newArr.push(arr[i] * arr[i + 1]);

    }
    return newArr;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8]));