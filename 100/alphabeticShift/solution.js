function solution(str){
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++){

        if (arr[i] === 'z'){
            arr[i] = 'a';
        }else{

            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
        }
    }
    return arr.join('');
}

console.log(solution('abcdefghijklmnopqrstuvwxyz'));