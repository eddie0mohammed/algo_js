
const solution = (str1, str2) => {

    let firstLetter = str1[0];

    let index = str2.split('').findIndex(elem => elem === firstLetter);

    let temp1 = str2.split('').slice(0, index).join('');
    let temp2 = str2.split('').slice(index).join('');

    let temp = temp2 + temp1;

    if (temp == str1){
        return true;
    }
    return false;

}

console.log(solution('abcde', 'cdeab'))
console.log(solution('abc', 'acb'))