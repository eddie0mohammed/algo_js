const solution = (a, b) => {

    const num1 = parseInt(a);
    const num2 = parseInt(b);

    if (num1 < num2){
        return 'Less';
    }else if (num1 > num2){
        return 'Greater';
    }else{
        return 'equal'
    }

}

console.log(solution('12', '13'));
console.log(solution('12', '12'));
console.log(solution('14', '13'));