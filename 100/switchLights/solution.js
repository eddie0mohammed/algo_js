const solution = (arr) => {

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 1){
            for (let j = 0; j <= i; j++){
                if (arr[j] == 0){
                    arr[j] = 1;
                }else{
                    arr[j] = 0;
                }
            }
        }        
    }

    return arr;


}

console.log(solution([1,1,1,1,1]));