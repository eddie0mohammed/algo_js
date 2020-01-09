const solution = (note) => {

    let digits = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
        8: 'i',
        9: 'j'
    };

    let words = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9
    }

    let arr = note.split('');

    let newArr = arr.map(elem => {
        if (digits.hasOwnProperty(elem)){
            return digits[elem];
        }else if (words.hasOwnProperty(elem)){
            return words[elem];
        }
        else{
            return elem;
        }
    });

    return newArr.join('');

}

console.log(solution("you'll n4v4r 6u4ss 8t: cdja"))