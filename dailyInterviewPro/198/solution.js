
const solution = (arr, min, max) => {

    let newArr = [];
    for (let i = min; i <= max; i++){
        if (!arr.includes(i)){
            newArr.push(i);
        }
    }

    let temp = [];
    let start;
    let end;
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i + 1] === newArr[i] + 1 && i !== newArr.length - 1){
            continue;
        }else{
            let z = (newArr[i], newArr[i]);
            temp.push(z);
        }
        
    }
    return temp;

}

console.log(solution([1, 3, 5, 10], 1, 10))