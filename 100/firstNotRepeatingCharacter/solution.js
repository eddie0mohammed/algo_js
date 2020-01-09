const solution = (str) => {
    let arr = str.split('');

    let obj = {};
    arr.forEach(elem => {
        if (obj.hasOwnProperty(elem)){
            obj[elem] += 1;
        }else{
            obj[elem] = 1;
        }
    });

    let newArr = [];
    for (let key in obj){
        if (obj[key] == 1){
            newArr.push(key);
        }
    }

   for (let i = 0; i < arr.length; i++){
       if (newArr.includes(arr[i])){
           return arr[i];
       }
   }

   
   return '_';
}

console.log(solution("abacabad"))
console.log(solution("abacabaabacaba"))