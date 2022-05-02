function tribonacci(signature, n) {
  console.log(signature);
  console.log(n);

  //arr.map((item,index,array), )
  /*
        while result.size < n:
            if(tri < 3)
                tri.push(signature(n))
    */

  if (n <= 3) {
    return signature.splice(0, n);
  } else {
    let result = [...signature];
    // console.log(result[0]+result[1]+result[2]);
    for (var i = 2; i < n-1; i++) {
        // console.log(result[i - 2] + result[i - 1] + result[i]);
      result.push(result[i - 2] + result[i - 1] + result[i]);
    }
    return result;
  }
}

console.log(tribonacci([1, 1, 1], 10));
//Result: [1,  1,  1,  3,   5,  9, 17, 31, 57, 105]