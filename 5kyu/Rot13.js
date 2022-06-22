/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  let msgSplit = message.split("");

  //your code here
  function cipherChar(t){
    let a = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log("Char="+t)
    return a[a.indexOf(t) + 13]
  }
//   console.log(a.indexOf(msgSplit[1]));
//   console.log(a[a.indexOf(msgSplit[1]) + 13]);

  console.log(cipherChar[msgSplit[0]])
}

rot13("abc")

