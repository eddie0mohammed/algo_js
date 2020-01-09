const solution = (num) => {

    let newArr = [num];
    let newNum = manipulate(num);
    // console.log(newNum);

    while (!newArr.includes(newNum)){
        newArr.push(newNum);

        newNum = manipulate(newNum);
    }

    return newArr.length + 1;

}


function manipulate (num){
    let newNum = num.toString().split('').reduce((acc, elem) => {
        return acc + (parseInt(elem) * parseInt(elem));
    }, 0);

    return newNum;

}

console.log(solution(16));
console.log(solution(103));