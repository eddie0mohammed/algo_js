const solution = (arr) => {
    let len = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > len){
            len = arr[i].length;
        }
    }

    let newArr = [];
    // for (let i = 0; i < arr.length; i++){
    //     if (arr[i].length === len){
    //         newArr.push(arr[i]);
    //     }
    // }
    arr.forEach(elem => {
        if (elem.length === len){
            newArr.push(elem);
        }
    })
    return newArr;

}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]))