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
        return ""
    }

    let splitStr = str.split("")
    let strCount = 0;
    let abc = "abcdefghijklmnopqrstuvwxyz"
    splitStr.forEach( (e,i) => {
        if(abc.includes(e)){
            strCount++;
        }
    })
    let answer = [];
    for (let i = 0; i<str.length; i++){
        let newStr = [...splitStr];
        newStr[i] = newStr[i].toUpperCase()
        answer.push(newStr.join(""))
    }
    return answer;
}

let test = "A       b    ,a       B"
