/*Your job is to write a function which increments a string, to create a new string.
    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString(str) {
  //Check for "null" / ""
  if (str === "" || null) return "1";

  //Split "Letter" and "Digits", and run increment() on "Digits" part
  let split = str.match(/[a-z]+|\d+/gi) //Split "Letter" and "Digits"
  if(split.length===1){
    if(isNaN(split[0])) return split[0] + 1
    else return increment(split[0])
  }
  //If there's 2 groups
  else{
    return split[0]+increment(split[1])
  }

  //Return incremented Digits in type:String
  function increment(numStr) {
    let int = Number(numStr) + 1; //Incremented Number
    // console.log(int);
    let digits = numStr.split("");
    // console.log(digits);

    let result = String(int);
    for (let i = 0; i < result.length; i++) {
      digits.pop();
    }
    // console.log(digits);
    // console.log(digits.join("") + result);
    return digits.join("") + result;
  }
}

// console.log(incrementString(""));
console.log(incrementString("1"));
// console.log(incrementString("foo0099"));
// console.log(incrementString("foo000"));
