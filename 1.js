
const solution = (num, parts) => {

  let arr = [];
  for (let i = 0; i < parts; i++){
    arr.push(1);
  }

  let sum = calculateSum(arr);
  if (sum === num){
    return arr;
  }
  while (sum < num){

    for (let i = arr.length - 1; i >= 0; i--){

      arr[i]+= 1;
      sum = calculateSum(arr);
      if (sum === num){
        return arr;
      }
    }
  }
  return '';

}

const calculateSum = (arr) => {

  return arr.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
}

console.log(solution(2, 2));