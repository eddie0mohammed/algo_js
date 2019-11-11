const solution = (arr) => {
    let final = [];
    for (let i = 0; i < arr.length; i++){
        let newArr = arr.filter((elem, j) => {
            if (i !== j)
                return elem;
        })

        let temp = newArr.reduce((acc, elem) => {
            return acc * elem;
        }, 1);

        final.push(temp);

        

       
    }
    return final;
    
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([3, 2, 1]));