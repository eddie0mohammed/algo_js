const convertToBinary = (dec) => {
    return (dec >>> 0).toString(2);
}

const solution = (num) => {

    let arr = convertToBinary(num).split('');
    console.log(arr);

    let counter = 0;
    // let max = "";
    // for (let i = 0; i < arr.length; i++){
        
    // }
    


    return counter;
}

console.log(solution(242));