/*
Create methods to convert between Bijective Binary strings and integers and back.
A bijective binary number is represented by a string composed only of the characters 1 and 2. Positions have the same value as in binary numbers, a string of repeated 1's has the same value in binary and bijective binary. As there is no symbol for zero it is represented by an empty string.

Every non negative integer has a unique representation unlike binary where 1 = 0001.
https://en.wikipedia.org/wiki/Bijective_numeration

0 = ""
1 = "1"
2 = "2"
3 = "11"
4 = "12"
5 = "21"
6 = "22"

*/

const bijectiveBinary = {
    convertToInt: function (str) {
      if (str === "") return 0;
      let temp = str.split("").reverse();
      // console.log(temp)
      let result = temp.reduce((sum, cur, index) => {
        return sum + 2 ** index * cur;
      }, 0);
      console.log("fromstr:"+result);
      return result;
    },
    convertFromInt: function (int) {
      // enter your code here
      if (int === 0) return "";
      let string = [];
      function f(x) {
        return Math.ceil(x) - 1;
      }
      let qn = f(int / 2); // q0
      string.push(int - qn * 2); // a0
      while (qn != 0) {
        let qnInc = f(qn / 2);
        let anInc = qn - qnInc * 2;
        string.push(anInc);
        qn = qnInc;
      }
      string = string.reverse().join("")
      console.log(string)
      return string;
    },
  };
