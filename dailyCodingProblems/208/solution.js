
const solution = (str1, str2, str3) => {

    let obj1 = objectify(str1);
    let obj2 = objectify(str2);
    let obj3 = objectify(str3);

    console.log(obj1);
    console.log(obj2);
    console.log(obj3);

    let count = 0;
    for (let key in obj1){
        if (obj2.hasOwnProperty(key) && obj3.hasOwnProperty(key)){
            count += Math.min(obj1[key], obj2[key], obj3[key]);
            
        }
    }

    return count;


}


const objectify = (str) => {

    let obj = {};
    str.split('').forEach(elem => {
        if(obj.hasOwnProperty(elem)){
            obj[elem]++;
        }else{
            obj[elem] = 1;
        }
    })

    return obj;
} 

console.log(solution("epidemiologist", "refrigeration", "supercalifragilisticexpialodocious"))