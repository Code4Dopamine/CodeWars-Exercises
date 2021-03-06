/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
    if (iterable.length === 0){
        return [];
    }
    let arr = [];
    //Turn string into array
    (typeof iterable === 'string') ? arr = iterable.split("") : arr = iterable;

    const result = [];
    arr.forEach(e => {
        if(result.length===0){
            result.push(e);
        }else if(result[result.length-1]!==e){
            result.push(e);
        }
    })
    return result;
}


console.log(uniqueInOrder("AAAABBBCCDAABBB"))
