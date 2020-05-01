
const solution = (obj) => {

    let newObj = {};

    for (let key in obj){
       
        if (typeof obj[key] === 'object'){
            let tempObj = solution(obj[key]);
            

        }else{
            newObj[key] = obj[key];
        }

    }

    return newObj;
} 


// let flattened = {}
// let keys = Object.keys(dict) //give me an array of keys
// for (let i=0; i< keys.length; i++){
//   if (typeof dict[keys[i]] === "object") {
//     let flatObj = flattenDictionary(dict[keys[i]])
//     let newKeys = Object.keys(flatObj) //[a,b]
//     for (let j=0; j<newKeys.length; j++) {
//       if (newKeys[j] === "") {
//         flattened[keys[i]] = flatObj[newKeys[j]]
//       } else {
//          flattened[keys[i]+"."+newKeys[j]] = flatObj[newKeys[j]]
//       }

//     }
//     //get back to this
//   } else {
//     flattened[keys[i]] = dict[keys[i]]
//   }
// }
// return flattened
// }





console.log(solution({
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}))