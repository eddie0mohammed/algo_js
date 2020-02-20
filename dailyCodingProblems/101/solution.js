const solution = (arr, target) => {

    for (let i = 0; i < arr.length; i++){

        let newArr = [];
        let total = 0;
        for (let j = i; j < arr.length; j++){
            total += arr[j];
            newArr.push(arr[j]);

            if (total === target){
                return newArr;
            }
        }
        newArr = [];
    }
    return -1
}



