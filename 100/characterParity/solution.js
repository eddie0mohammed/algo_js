const solution = (input) => {
    if (isNaN(parseInt(input))){
        return 'not a number';
    }else{
        let num = parseInt(input);
        if (num % 2 === 0){
            return 'even';
        }else{
            return 'odd';
        }
    }
}

console.log(solution('5'));
console.log(solution('6'));
console.log(solution('q'));