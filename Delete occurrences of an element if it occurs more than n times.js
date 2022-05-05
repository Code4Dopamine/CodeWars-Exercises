/*
Given a list and a number, create a new list that contains each number of lst at most N times without reordering. For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3]. With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

let test = [20, 37, 20, 21, 20];

function deleteNth(arr, n) {
  const m = new Map();

  return arr.filter((e) => {
      // Add new key to Map m
    if (!m.has(e)) {
      m.set(e,1);
      return e;
      // If Key exists and is less than n -> increment Map Key Value
    }else if (m.get(e) < n){
        console.log('This ran');
        m.set(e,m.get(e)+1);
        return e;
    }
  });
  
//   for (i of m){
//       console.log(i);
//   }
}

// console.log(deleteNth(test,2))
