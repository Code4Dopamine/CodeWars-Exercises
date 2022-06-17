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
  //Split into [string, number]
  let split = str.match(/[a-z]+|\d+/gi);
  console.log(split);

  // If no number trailing behind:
  if (split.length === 1) return split + "1";
  // Else increment digit
  else {
    //Get Number and +1
    let int = Number(split[1]) + 1;
    // Setup Digit Array of Strings [...]
    let digits = split[1].split("");
    // Convert "int" to String
    let result = String(int); //Stringify "int" var
    // Remove front digits
    for (let i = 0; i < result.length; i++) {
      digits.pop();
    }

    return split[0] + digits + result;
  }
}

console.log(incrementString("foo0099"));
console.log(incrementString("foo"));
