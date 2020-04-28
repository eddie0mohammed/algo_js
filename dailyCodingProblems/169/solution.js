
const solution = (word1, word2, dic) => {

    let arr = [word1];
    let arr1 = word1.split('');
    let arr2 = word2.split('');

    for (let i = word1.length - 1; i >= 0; i--){
    
        arr1[i] = arr2[i];
        
        let temp = arr1.join('');

        if (!dic.hasOwnProperty(temp)){
            return null;
        }
        arr.push(temp);
    }
    return arr;
}

console.log(solution('dog', 'cat', {dot:"dot", dop:"dop", dat:"dat", cat:"cat"}))