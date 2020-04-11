function jumpingOnClouds(c) {
    
  let jump = 0;
  for (let i = 0; i < c.length; i+= 2){
      
      if (c[i] === 1){
          i--;
          
      }
      jump++;
  }
  return jump;
}


// console.log(jumpingOnClouds([0,0, 1, 0, 0, 0, 0, 1, 0, 0]))
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));