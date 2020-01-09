const solution = (arr, len) => {
    let newArr = [];

   for (let i = 0; i < arr.length; i += len){
       newArr.push(arr.slice(i, i+len));
   }
   return newArr;
}

console.log(solution(["a", "b", "c", "d"], 2));
console.log(solution([0, 1, 2, 3, 4, 5], 4))