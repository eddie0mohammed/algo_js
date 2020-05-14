
// const add = (() => {
  
//   let a = 1;
//   return function(){
//     a++;
//     return a;
//   }
// })();


const add = () => {

  let a = 1;
  return function(){
    a++;
    return a;
  }
}


console.log(add());
console.log(add());
console.log(add());
console.log(add());