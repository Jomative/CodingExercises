
/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here
    
    let sum;
    let arr = ar;
    for (let i=0; i < arr.length; i++){
        sum+=arr[i];
        // console.log(ar[i])
    }
    return sum;
}

let size = readLine();
let numArray = readLine();
//test
const defNumArray = [1, 51, 3];
console.log(simpleArraySum(numArray));
