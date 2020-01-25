
const convertToBinary = (dec) => {
    return (dec >>> 0).toString(2);
}


const solution = (num) => {

    let binary = convertToBinary(num);

    let arr = binary.split('');
    let str = '';
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 1){
            str += arr[i];
        }else{
            break;
        }
    }

    return str.length;
}

console.log(solution(242));