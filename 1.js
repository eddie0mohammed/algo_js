
const solution = (s) => {

  let arr = s.split('');
  arr = filterDuplicates(arr);
  let newArr = arr.map(elem => convertToBinary(elem));
  newArr.filter(elem => elem.split('')[0] !== '0');

  // console.log(newArr);
  let moreZerosArr = [];

  newArr.forEach(elem => {
    let check = checkForMoreZeros(elem);
    // console.log(check);
    if (check){
      moreZerosArr.push(elem);
    }
  })

  // console.log(moreZerosArr)
  
  let final = moreZerosArr.map(elem => {
    return String.fromCharCode(parseInt(elem, 2).toString(10));
  })

  return final
  
  
}

const convertToBinary = (char) => {

  return char.charCodeAt(0).toString(2);
}

const checkForMoreZeros = (str) => {
  
  let arr = str.split('');
  
  let obj = {};
  arr.forEach(elem => {
    if (obj.hasOwnProperty(elem)){
      obj[elem]++ 
    }else{
      obj[elem] = 1;
    }
  });

  let moreZero = false;
  if (obj['0'] > obj['1']){
    moreZero = true;
  }

  return moreZero;
}

const filterDuplicates = (arr) => {
  let obj = {};
  arr.forEach(elem => {
    if (obj.hasOwnProperty(elem)){
      obj[elem]++;
    }else{
      obj[elem] = 1;
    }
  });
  let newArr = [];
  for (let key in obj){
    newArr.push(key);
  }
  return newArr;
}

// console.log(solution('abcdefghijklmnopqrstuvwxyz'));
console.log(solution('0'));


['a', 'b', 'd', 'h', 'p', 'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'L', 'P', 'Q', 'R', 'T', 'X', '0']
['a', 'b', 'd', 'h', 'p', 'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'L', 'P', 'Q', 'R', 'T', 'X', '0']