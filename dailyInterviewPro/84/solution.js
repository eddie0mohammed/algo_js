const solution = (arr) => {

    let obj = {};

    let newArr = [];

    arr[0].split('').forEach(elem => {
        if (!obj.hasOwnProperty(elem)){
            obj[elem] = 1;
        }
    });
    

    for (let i = 1; i < arr.length; i++){
        arr[i].split('').forEach(elem => {
            if (obj.hasOwnProperty(elem) && !newArr.includes(elem)){
                newArr.push(elem);
            }
        })
    }

    return newArr;

}

console.log(solution(['google', 'facebook', 'youtube']))