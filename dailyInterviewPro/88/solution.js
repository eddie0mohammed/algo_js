const solution = (word, char) => {

    let indexArr = [];
    let arr = word.split('');

    arr.forEach((elem, i) => {
        if (elem === char){
            indexArr.push(i);
        }
    });

    let newArr = [];

    for (let i = 0; i < arr.length; i++){

        let min = 100;

        indexArr.forEach(elem => {
            let temp = Math.abs(elem - i);
            // console.log(temp)
            if (min > temp){
                min = temp;
            }
            
        })

        newArr.push(min);


    }

    return newArr;
}

console.log(solution('helloworld', 'l'))