
const solution = (arr1, arr2) => {

  if (arr1.length !== arr2.length){
    return ;
  }

  for (let i = 0; i < arr1.length; i++){

    let temp = arr2[arr2.length - 1 - i];
    arr2[arr2.length - 1 - i] = arr1[i];
    arr1[i] = temp;
  }
  return [arr1, arr2];
}

console.log(solution(['a', 'b', 'c'], [1, 2, 3]))