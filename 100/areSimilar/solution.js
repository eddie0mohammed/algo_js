const solution = (arr1, arr2) => {
    if (arr1.length !== arr2.length){
        return false;
    }

    let temp1 = [];
    let temp2 = [];

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            temp1.push(arr1[i]);
            temp2.push(arr2[i]);
        }
    }

    // console.log(temp1);
    // console.log(temp2);

    if (temp1.length > 2 || temp2.length > 2){
        return false;
    }

    temp1.reverse();
    // console.log(temp1)
    for (let i = 0; i < temp1.length; i++){
        if (temp1[i] !== temp2[i]){
            return false;
        }
    }
    return true;
}

console.log(solution([1, 2, 3,], [2, 1, 3]))