const solution = (v1, v2) => {

    let arr1 = v1.split('.');
    let arr2 = v2.split('.');

    arr1 = fil(arr1);
    arr2 = fil(arr2);

    let num1 = red(arr1);
    let num2 = red(arr2);

    if (num1 > num2){
        return 1;
    }else if (num1 < num2){
        return -1;
    }else{
        return 0;
    }    

    
}

function fil(arr){

    return arr.map(elem => {
        return parseInt(elem);
    });


}

function red(arr){
    return arr.reduce((acc, elem) => {
        return acc + parseInt(elem);
    }, 0);
}

console.log(solution('1.001.0', '1.001.0'));