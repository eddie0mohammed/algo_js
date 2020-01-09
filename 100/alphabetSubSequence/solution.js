function solution(s){
    let arr = s.split('');

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1].charCodeAt(0) <= arr[i].charCodeAt(0)){
            return false;
        }
    }
    return true;
}

console.log(solution("ace"));
console.log(solution("bxz"));