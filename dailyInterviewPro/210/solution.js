
const solution = (str) => {

    let duplicate = true;
    let arr = str.split('');
    let check = false;

    while (duplicate){
        check = false;

        for (let i = 0; i < arr.length; i++){
            if (arr[i + 1] === arr[i]){
                check = true;
            }
        }

        if (check === true){
            for (let i = 0; i < arr.length; i++){
                if (arr[i+1] === arr[i]){
                    arr.splice(i, 2);
                    i -= 2;
                }
                if (arr.length === 0){
                    return [];
                }
            }
        }else{
            duplicate = false;
        }


    }

    return arr;
}

console.log(solution('cabbaccc'));