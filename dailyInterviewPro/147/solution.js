
const solution = (arr) => {

    let newArr = arr.filter(elem => elem > 0);

    let obj = {};
    newArr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });
    let temp = [];
    for (let key in obj){
        temp.push(key);
    }
    console.log(temp);

    for (let i = temp[0]; i < temp[temp.length - 1]; i++){
        // console.log(temp.includes(i.toString()));
        if (!temp.includes(i.toString())){
            return i;
        }
    }

    return '';
}

console.log(solution([3, 4, -1, 2,1, 6]))