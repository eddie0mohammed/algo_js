const solution = (arr, low, high) => {

    let newArr = [];

    for (let i = low; i <= high; i++){
        if (!arr.includes(i)){
            newArr.push(i);
        }
    }

    // console.log(newArr);
    let temp = [];

    for (let i = 0; i < newArr.length - 1; i++){
        
        if (newArr[i + 1] - newArr[i] !== 1){
            temp.push(`${newArr[i]}->${newArr[i]}`);
        }else{
            let j = i + 1;
            let current = arr[j];
            let previous = arr[i];
            while (j < newArr.length){
                if (current - previous === 1){
                    j++;
                    current = arr[j];
                    previous += 1;
                }
                temp.push(`${newArr[i]}->${current}`);
                j++;

            }
        }
    }

    return temp;

}

console.log(solution([1, 3, 5, 10], 1, 10));