function tickets(peopleInLine){
  // ...
  let vasya = {};
  if (peopleInLine[0] !== 25){
    return 'NO'; 
  }
  
  for (let i = 0; i < peopleInLine.length; i++){
  
  let remainder = peopleInLine[i] - 25;
  console.log(remainder);
  if (remainder === 75){
    if (vasya['50'] >= 1 && vasya['25'] >= 1){
      vasya['50']--;
      vasya['25']--;
    }else if (vasya['25'] >= 3){
      vasya['25'] -= 3;
    }else{
      return 'NO';
    }
  }else if (remainder === 50){
    if (vasya['50'] >= 1){
        vasya['50']--;
      }else if (vasya['25'] >= 2){
        vasya['25'] -= 2;
      }else{
        return 'NO'
      }
  }else if (remainder === 25){
    if (vasya['25'] >= 1){
      vasya['25']--;
    }else{
      return 'NO';
    }
  }else{
    // return 'NO'
  }
    
  
  if (vasya.hasOwnProperty(peopleInLine[i])){
      vasya[peopleInLine[i]]++;
    }else{
      vasya[peopleInLine[i]] = 1;
  }  
  
  }
  // console.log(vasya);
  return 'YES'
}

// console.log(tickets([25, 25, 50]))
console.log(tickets([25, 100]));
// console.log(tickets([25, 25, 50, 50, 100]));