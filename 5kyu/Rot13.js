/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  if (message.length === 0 || message === null) return "";
  let msgSplit = message.split("");
  let a = "abcdefghijklmnopqrstuvwxyz";
  let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  //Return lowercase char
  function cipherChar(t) {
    let index = (a.indexOf(t) + 13) % 26;
    return a[index];
  }
  //Return uppercase char
  function cipherChar2(t) {
    let index = (b.indexOf(t) + 13) % 26;
    return b[index];
  }

  let result = msgSplit
    .map((e) => {
      if (a.includes(e)) {
        return cipherChar(e);
      }
      if (b.includes(e)) {
        return cipherChar2(e);
      }
      return e;
    })
    .join("");

  console.log(result);
  return result
}

//Rot13("test") = grfg
rot13("tes$t");
