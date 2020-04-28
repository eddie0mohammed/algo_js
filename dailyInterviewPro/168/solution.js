
const solution = (str) => {

    let obj = {};
    str.split('').forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    let count = 0;
    let odd = [];
    for (let key in obj){
        if (obj[key] % 2 !== 0){
            odd.push(key);
            count++;
        }
    }

    if (count > 1){
        return 'None';
    }
    let oddStr = '';
    for (let i = 0; i < obj[odd[0]]; i++){
        oddStr += odd[0];
    }

    let evenFirst = '';
    for (let key in obj){
        if (obj[key] % 2 === 0){
            for (let i = 0; i < (obj[key] / 2); i++){
                evenFirst += key;
            }
        }
    }

    let evenLast = evenFirst.split('').reverse().join('');
    return evenFirst + oddStr + evenLast;
    
}

console.log(solution('mmo00om'));