
const solution = (num) => {

  let arr = num.toString().split('');
  let len = arr.length;

  let sum = arr.reduce((acc, elem) => {
    return acc + (parseInt(elem) ** len);
  }, 0);

  console.log(sum);
  if (sum === num){
    return true;
  }
  return false;
}

console.log(solution(7));
console.log(solution(153));