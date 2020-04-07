
const solution = (str) => {

  let arr = str.split('');
  let newArr = arr.map(elem => {
    if ((/[A-Z]/g).test(elem)){
      return ` ${elem}`
    }else{
      return elem;
    }
  });

  return newArr.join('');
}


console.log(solution('camelCase'));
