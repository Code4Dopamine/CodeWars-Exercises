/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/




function solution(string) {
    // String.prototype.isUpperCase = function(){
    //     return this.valueOf().toUpperCase() === this.valueOf;
    // }

    let newArr = string.split("")
    // console.log(newArr);
    return string.map(e => { 
        console.log(typeof(e));
        console.log(isUpperCase(e));
        // isUpperCase(e) ? (" " + e) : e
        if (isUpperCase(e)){
            return " " + e;
        } else {
            return e;
        }
    })
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}

console.log(solution("camelCasingTest"));

// let test = "caseClosed"
// let testArr = test.split("");
// let result = testArr.map((e,i) => {
//     console.log("String = " + e + ", Index = " + i + ", isUpper? " + isUpperCase(e));
//     // console.log();
//     if(isUpperCase(e)){
//         testArr.splice(i,0," ");
//     }
// })
// console.log(testArr)


