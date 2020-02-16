const solution = (arr, word) => {

    let obj = {};

    arr.forEach(elem => {
        elem.forEach(item => {
            if (obj.hasOwnProperty(item)){
                obj[item]++;
            }else{
                obj[item] = 1;
            }
        })
    })

    let wordArr = word.split('');
    let check = true;

    for (let i = 0; i < wordArr.length; i++){
        if (!obj.hasOwnProperty(wordArr[i])){
            return false
        }else{
            if (obj[wordArr[i]] > 0){
                obj[wordArr[i]] -= 1;
            }else{
                return false;
            }
        }
    }
    return true;
} 

console.log(solution([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ], "ABCB"));