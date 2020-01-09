const solution = (arr, price) => {

    let coins = 0;

    for (let i = arr.length - 1; i > -1; i--){
        if (price > arr[i]){
            while (price > arr[i]){
                price -= arr[i];
                coins++;
            }

        }
    }
    return coins;

    
}

console.log(solution([1, 2, 10], 28));