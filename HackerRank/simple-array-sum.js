// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'simpleArraySum' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY ar as parameter.
//  */

function simpleArraySum(ar) {
    // Write your code here
    
    let sum = 0; //ohhh..this had to be init...
    for (let i=0; i < ar.length; i++){
        sum+=ar[i];
        // console.log(ar[i])
    }
    return sum;
}


let defNumArray = [1, 51, 3];
console.log(simpleArraySum(defNumArray));

// function simpleArraySum(ar) {
//     var sum = 0;
//     for (var i = 0; i < ar.length; i++) {
//       sum += ar[i];
//     }
//     return sum;
//   }
  
//   console.log(simpleArraySum([1, 2, 3, 4]))