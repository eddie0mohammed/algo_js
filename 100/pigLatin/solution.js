const solution = (str) => {

    let arr = str.split('');
    let newArr;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(arr[0])){
        arr.push('w');
    }else{
        let index = 0;
        while (!vowels.includes(arr[index])){
            index++;
        }
        let elem = arr.splice(0, index);
        arr.push(...elem);

    }

    return arr.join('') + 'ay';

}

console.log(solution('glove'));
console.log(solution('eight'));