

const solution = (str) => {
    let arr = str.split('').filter(elem => elem !== '[' && elem !== ']');
    console.log(arr);

    let temp = '';
    let numberPresent = false;
    let firstNum;
    if (typeof (parseInt(arr[0])) === 'number'){
        numberPresent = true;
        firstNum = arr.shift();
    }
    // console.log(firstNum);
    console.log(arr);

    for (let j = 0; j < arr.length; j++){
        // console.log(arr[j]);
        let num = 1;
        // console.log(parseInt(arr[j]));
        
        if (parseInt(arr[j]) >= 1 && parseInt(arr[j]) <= 9){
            // console.log(arr[j]);
            num = parseInt(arr[j]);
            j++;
        }
        
        temp += arr[j].repeat(num);

    }

    return (temp.repeat(firstNum));
    
    


}

console.log(solution('2[a2[b]c]'));