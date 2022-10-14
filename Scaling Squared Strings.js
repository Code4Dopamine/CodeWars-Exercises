/*
You are given a string of n lines, each substring being n characters long. For example:
s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').
    Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"

A v-vertical scaling of a string consists of replicating v times each part of the squared string.
    Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"

Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"

*/

function scale(strng, k, n) {
    //k = horizontal
    //n = vertical (\n for next line)
    console.log(`${strng}:${k}:${n}`)
  
    if(strng === ""){
      return ""
    }
  
    let x = strng.split("\n")
    let result = ""
    
    result = x.map(e => {
  
      //Each Character
      return e.split("").map(char => {
        return char.repeat(k);
      }).join("").concat("\n").repeat(n)
  
    }).join("");
    
  
    console.log("result:"+result)
    
    //Remove the last "\n"
    return result.slice(0,-1);
  }

  