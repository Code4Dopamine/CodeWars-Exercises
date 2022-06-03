/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.
If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
    if (text === null || n < 0){
        return text
      }
  function reOrder(t) {
    let temp = [];
    for (let i = 1; i <= t.length; i += 2) {
      temp.push(t[i]);
    }
    for (let j = 0; j <= t.length - 1; j += 2) {
      temp.push(t[j]);
    }
    return temp.join("");
  }

  let encrypt = text;
  for (let i = 0; i < n; i++) {
    encrypt = reOrder(encrypt);
  }
//   console.log(encrypt);
    return encrypt
}

function decrypt(encryptedText, n) {
    if(n < 0){
        return encryptedText
      }

    function decrypter(t) {
        const mid = t.length / 2;
        const sect1 = t.split("").slice(mid) //Even, starting index 0
        const sect2 = t.split("").slice(0,mid) //Odd Index, depleted to add to "sect1" array
        
        let result = sect1.reduce((init, curr) => {
            init.push(curr);
            if(sect2.length !== 0){
                init.push(sect2.shift())
            }
            return init
        },[])

        return result.join("")
    }

  let decryptText = encryptedText
  for (let i = 0; i < n; i++) {
      decryptText = decrypter(decryptText);
  }
//   console.log(decryptText)
  return decryptText
}

//TEST

encrypt("012345", 2); //304152
encrypt("01234", 3); //20314

decrypt("304152", 2);
decrypt("20314", 3);
