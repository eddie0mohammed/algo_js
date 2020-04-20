
const solution = (arr) => {

    let newArr = arr.map(elem => {
        let temp = elem.split('');
        let str = '';
        str += temp[0];
        for (let i = 1; i < temp.length; i++){
            if (temp[i] === 'a' || temp[i] === 'e' || temp[i] === 'i' || temp[i] === 'o' || temp[i] === 'u'){
                return str;
            }
            str += temp[i];
        }
    });

    return newArr;

}

console.log(solution(["dog","cat", "apple", "apricot", "fish"]));