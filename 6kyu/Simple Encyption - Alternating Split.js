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
    function reOrder(t) {
        let temp = []
        for(let i = 1; i <= t.length; i+=2){
          temp.push(t[i])
        }
        for(let j = 0; j <= t.length-1; j+=2){
            temp.push(t[j])
        }
        return temp.join("")
    }

    let encrypt = text
    for (let i = 0; i < n; i++){
        encrypt = reOrder(encrypt)
    }
    console.log(encrypt)
}

function decrypt(encryptedText, n) {
    const mid = encryptedText/2
}

encrypt("012345",1)
encrypt("01234",3)

