const solution = (arr, k) => {

    for (let i = 0; i < arr.length; i++){
        let temp = k - arr[i];

        if (arr.includes(temp)){
            return true;
        }


    }
    return false;
}

console.log(solution( [10, 15, 3, 7] , 17))