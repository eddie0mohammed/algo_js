const solution = (arr) => {

    let newArr = arr.map(elem => {
        return elem.map(elem1 => {
            if (elem1 === true){
                return 1;
            }else{
                return 2
            }
        })
    })
    
    return newArr;

}

console.log(solution([[true, false, false],
    [false, true, false],
    [false, false, false]]))