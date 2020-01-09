const solution = (arr, k) => {
    
    let count = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        count++;
        if (count == k){
            count = 0;
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


const solution1 = (arr, k) => {
    return arr.filter((elem, i) => {
        if (i % k === 0){
            return elem
        }
    });
}
console.log(solution1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , 3))