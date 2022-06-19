/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(str) {
  // The function code should be here
  if(str.length === 0 || str === null) return {};
  const dic = {};
  const strArr = str.split("");

  str.split("").forEach(e=> {
        console.log(e)
      if(Object.keys(dic).includes(e)){
        dic[e] = 1
      }
      dic[e] = dic[e]+=1

  })

  console.log(dic)
  return dic;
}


count("aabbbc")