
// // const solution = (arr) => {

// //     for (let i = 0; i < arr.length; i++){

// //         // let j = i + 1;
// //         let left = sum(arr.slice(0, i));
// //         let right = sum(arr.slice(i + 1 ));

// //         if (left === right){
// //             return i;
// //         }

// //     }
// //     return -1;
// // }

// // const sum = (arr) => {
// //     return arr.reduce((acc, elem) => {
// //         return acc + elem;
// //     }, 0);
// // }

// // console.log(solution([1,2,3,4,3,2,1]))
// // console.log(solution([1,100,50,-51,1,1]));
// // console.log(solution([20,10,-80,10,10,15,35]));


// function list(names){
//     //your code here
//     let arr = [];
//     names.forEach(elem => {
//       arr.push(elem.name)
//     });

    
    
//     let str = '';
//     for (let i = 0; i < arr.length; i++){
      
//     if (i === arr.length - 2){
//         str += `${arr[i]} `
//     }
//       else if (i !== arr.length - 1){
          
//           str += `${arr[i]}, `
//       }
//       else{
//         str += `& ${arr[i]}`
  
//       }
    
    
//     }
//     console.log(str);
    
//     return str;
//   }
  

//   console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))





// Complete the triplets function below.
// function triplets(t, d) {
//   d.sort((a, b) => a - b);
//     let count = 0;
    
//     for (let i = 1; i < d.length - 1; i++){

//       let left = d.slice(0, i);
//       let right = d.slice(i + 1);

//       for (let y = 0; y < left.length; y++){

//         for (let z = 0; z < right.length; z++){
//           if (left[y] + d[i] + right[z] <= t){
//             count++;
//           }
//         }
//       }
//     }

//     return count;

// }

// console.log(triplets(8, [1,2,3,4,6]))
// console.log(triplets(7, [3, 1, 2, 4]))