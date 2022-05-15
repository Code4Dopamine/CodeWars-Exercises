/*
Task:
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example:
    wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str) {
    if (str.length === 0){
        return [];
    }

    let splitStr = str.split("")
    let strIndex = []; //Stores [idx] of letter in "str"

    let abc = "abcdefghijklmnopqrstuvwxyz"
    splitStr.forEach( (e,i) => {
        if(abc.includes(e)){
            strIndex.push(i);
        }
    })
    let answer = [];
    //Loop through "strIndex" array that contain index location within the string
    for (let i = 0; i<strIndex.length; i++){
        let newStr = [...splitStr];
        newStr[strIndex[i]] = newStr[strIndex[i]].toUpperCase();
        answer.push(newStr.join(""));
    }
    return answer;
}

let test = "a       b    "
console.log(wave(test))