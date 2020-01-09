const solution = (arr) => {

    let people = arr.filter(elem => elem !== -1).sort((a, b) => a - b);
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === -1){
            newArr.push(-1);
        }else{
            newArr.push(people.shift());
        }
    }
    return newArr;


}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
