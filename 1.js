function flatten(obj) {
    // Implement function here
    console.log("You can output things here for testing");
    
    let newArr = [];
    
    let arr = Object.keys(obj);
    if (arr.length === 0){
      return [];
    }
    
    
    
    
    newArr.push({id: obj.id});
    
    
    
    if (obj.children){
      obj.children.forEach(elem => newArr.push(elem));
    }
    
    return newArr;
  }
  
  var exampleInput = {
    id:"abc",
    children: [
        {id: 'x'},
        {id: 'y'}
    ]
  };
  
  console.log(flatten(exampleInput))