/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function isUpperCase(str) {
    return str === str.toUpperCase();
}
function solution(string) {

    let newArr = string.split("")
    // console.log(newArr);
    return newArr.map(e => { 
        if (isUpperCase(e)){
            return " " + e;
        } else {
            return e;
        }
    }).join("")
}
