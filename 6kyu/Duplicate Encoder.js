function duplicateEncode(word){
    let arr = word.toLowerCase().split("");
    let repeat = arr.filter((item,index) => arr.indexOf(item) !== index);
    console.log("Word="+word);
    // console.log(arr);
    // console.log(repeat);
    // // arr.forEach(e => {
    // //     console.log((repeat.includes(e))?")":"(");
    // // })
    let result = arr.map(e => (repeat.includes(e))?")":"(");
    // console.log(result);
    return result.join("");
}