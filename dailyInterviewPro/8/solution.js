const arr = (str) => { 
    return str.split('').filter(elem => {
        return elem != '0';
    }).join('').split('.');
}

const solution = (version1, version2) => {

    let arr1 = arr(version1);
    let arr2 = arr(version2);

    console.log(arr1);
    console.log(arr2);

    let temp1 = arr1.reduce((acc, elem) => {
        return acc + elem;
    }, "");
    let temp2 = arr2.reduce((acc, elem) => {
        return acc + elem;
    }, "");

    if (Number(temp1) < Number(temp2)){
        return -1;
    }else if(Number(temp1) > Number(temp2)){
        return 1;
    }else{
        return 0;
    }
}

console.log(solution("1.0.33", "1.0.27"));
console.log(solution("0.1", "1.1"));
console.log(solution("1.01", "1.001"));
console.log(solution("1.0", "1.0.0"));