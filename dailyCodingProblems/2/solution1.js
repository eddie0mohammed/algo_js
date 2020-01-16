const solution = (arr) => {

    // NAIVE
    // let newArr = [];

    // for (let i = 0; i < arr.length; i++){
    //     let temp = 1;
    //     for (let j = 0; j < arr.length; j++){
    //         if (j == i){
    //             continue;
    //         }else{
    //             temp *= arr[j];
    //         }
    //     }

    //     newArr.push(temp);
    // }

    // return newArr;


    let newArr = arr.map((elem, i) => {
        let temp = arr.filter((elem1, i1) => {
            return i1 !== i;

        });
        return temp.reduce((acc, x) => {
            return acc * x;
        }, 1);
    });
    return newArr
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([3, 2, 1]));