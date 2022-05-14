/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  //Create Array of ABC index
  let abc = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(abc)

  let result = "";
  
  //For each character, Find and return indexOf() in "abc" Array
  text.split("").forEach((e) => {
    if (abc.includes(e.toLowerCase())) {
      result += abc.indexOf(e.toLowerCase())+1 + " ";
    }
  });

  return result.trimEnd(); //Remove ending space
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))