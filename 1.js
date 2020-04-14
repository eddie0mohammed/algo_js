
const solution = (str) => {
  
  let len = str.length;
  let arr = str.split('');
  if (len % 2 !== 0){
    arr.push('_');
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i+=2){
    newArr.push(arr.slice(i, i+2).join(''));
  }

  return newArr;
  
}

console.log(solution('abcdefg'));