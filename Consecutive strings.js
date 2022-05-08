/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Examples:

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).
Note

consecutive strings : follow one after another without an interruption
*/
function isString(s) {
    return (+s).toString() !== s;
}

function longestConsec(strarr, k) {
    console.log("strarr: " + strarr);
    console.log("k: "+k)
    if (strarr.length === 0 || k > strarr.length || k <= 0){
        return "";
    }

    //Change "strarr" elements to "str.length" array
    let strlength = strarr.map(e => e.length)
    console.log(strlength);

    let consecutiveStrSumArr = []
    // Finding Sum of all Consecutives by "k" amount (ex: if k=2 => 0,1 ; 1,2; ... | if k=3 => 0,1,2 ; 1,2,3; ...)
    let endIndex = k; //Marks the amount of indexes to iterate through `strlength` array of lengths
    while (endIndex <= strlength.length){
        console.log("EndIndex: " + endIndex);
        consecutiveStrSumArr.push(strlength.slice(endIndex-k,endIndex).reduce((a,b)=>a+b,0))
        endIndex++;
    }
    console.log("ConSum: " + consecutiveStrSumArr)

    let maxArrayIndexStart = consecutiveStrSumArr.indexOf(Math.max(...consecutiveStrSumArr));
    console.log("MaxIndexStart= " + maxArrayIndexStart);

    let resultArr = strarr.slice(maxArrayIndexStart,maxArrayIndexStart+k)
    console.log("Result= " + resultArr);

    return resultArr.join("");

    // ?? Test issue on Kata Training?
    return resultArr.every(isString) ? resultArr.join("") : "";

    // if (resultArr.every(isString)){
    //     return resultArr.join("");
    // }else{
    //     return "";
    // }


}

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));
console.log(longestConsec(["zone","abigail","theta","form","libe","zas"], 2))

// console.log(["zone","abigail","theta","form","libe","zas"].splice(1,))
// let test = ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"]

// console.log(test.slice(0,2))