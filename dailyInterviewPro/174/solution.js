
const solution = (s1, s2) => {

    let count = 0;
    if (s1.length < s2.length){
        count += s2.length - s1.length;
    }else if (s2.length < s1.length){
        count += s1.length - s2.length
    }

    let obj1 = objectify(s1);
    let obj2 = objectify(s2);

    let arr1 = s1.split('');
    let arr2 = s2.split('');

    for (let i = 0; i < arr1.length; i++){
        if (!obj2.hasOwnProperty(arr1[i])){
            count++;

        }
    }

    return count;
}


const objectify = (str) => {
    let obj = {};
    str.split('').forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    });

    return obj;
}


console.log(solution('biting', 'sitting'));