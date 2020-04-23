
const solution = (str) => {


  let arr = str.split('WUB');
  // console.log(arr);
  arr = arr.filter(elem => {
    if (elem){
      return elem;
    }
  });
  return arr.join(' ');
}

// console.log(solution("AWUBBWUBC"));
console.log(solution("AWUBWUBWUBBWUBWUBWUBC"));