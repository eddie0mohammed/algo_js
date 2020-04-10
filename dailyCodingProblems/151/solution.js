
const solution = (arr) => {

    let newArr = [];
    for (let i =0; i < 10; i++){

    
    let rand = Math.random();
    
    if (rand <= 0.1){
        newArr.push(1);
    }else if (rand <= 0.6){
        newArr.push(2);
    }else if (rand <= 0.8){
        newArr.push(3);
    }else{
        newArr.push(4);
    }
    }
    return newArr;
}


console.log(solution([1, 2, 3, 4]))