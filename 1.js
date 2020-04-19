
const solution = (input) => {

  input = input.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i < input.length; i++){
    for (let j = i + 1; j < input.length; j++){

      if (input[j] - input[i] === 2){
        newArr.push([input[i], input[j]]);
      }

    }
  }
  return newArr;
}

console.log(solution([1, 2, 3, 4] ));