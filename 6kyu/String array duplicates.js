/*
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])
*/

function dup(s) {
    console.log(s)
    let answer = []
    
  //   const removeDup =>
    
    s.forEach(e => {
      let prevChar = ""
      let word = e.split("").map(x => {
        if (x !== prevChar){
          prevChar = x
          return x
        }
        return ""
      })
      console.log(word.join(""))
      answer.push(word.join(""))
    })
  return answer  
};
  