
const solution = (arr) => {

    for (let i = 0; i < arr.length; i++){

        // let j = i + 1;
        let left = sum(arr.slice(0, i));
        let right = sum(arr.slice(i + 1 ));

        if (left === right){
            return i;
        }

    }
    return -1;
}

const sum = (arr) => {
    return arr.reduce((acc, elem) => {
        return acc + elem;
    }, 0);
}

console.log(solution([1,2,3,4,3,2,1]))
console.log(solution([1,100,50,-51,1,1]));
console.log(solution([20,10,-80,10,10,15,35]));