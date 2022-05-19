/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

//Using Kadane's Algorithm
function maxSequence(arr) {
  let localMax = 0;
  let globalMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    //Local Maximum[i] = max(A[i],A[i] + local_maximum[i-1])
    localMax = Math.max(arr[i], arr[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  console.log(globalMax);
  if (globalMax < 0) {
    return 0;
  } else {
    return globalMax;
  }
}

// var maxSequence = function (arr) {
//   /* Approach:
//     - Located 1st positive #, if none -> return 0;
//     - Locate all Index# of positive number in array (later of Array.slice + check sum)
//   */

//   //Helper Function -> Sum of Array
//   function sum(sliced_arr){
//     return array.reduce((p,c) => p+c, 0)
//   }

//   let posArrIndexPosition = []; //Index Location of Positive # in 'arr'
//   arr.forEach( (e,i) => {
//     if(e>0){
//       posArrIndexPosition.push(i);
//     }
//   })

//   //Filter out Positive # only index
//     console.log(arr.slice(0,arr.length))
//     console.log(arr.slice(3,arr.length-1))
//   //

// };

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

console.log(sumHelper([1, -3, 4]));
