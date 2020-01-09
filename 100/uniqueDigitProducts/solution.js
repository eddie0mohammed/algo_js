const solution = (arr) => {

    let newArr = [];

    arr.forEach(elem => {
        if (elem.toString().length > 1){
            // console.log(elem.toString().length);
            let temp = elem.toString().split('');
            let num = temp.reduce((acc, elem1) => {
                return acc * parseInt(elem1);
            }, 1);

            

            if (!newArr.includes(num)){
                newArr.push(num);
            }


        }else{
            if (!newArr.includes(elem)){
                newArr.push(elem);
            }
        }
    });

    console.log(newArr);
    return newArr.length;
}

console.log(solution([2, 8, 121, 42, 222, 23]))