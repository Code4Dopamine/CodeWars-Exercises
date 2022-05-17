/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
such as
    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:
    [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
    [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return: (depend on the language)
productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

*/

function productFib(prod) {
    const sequence = [0,1]
    let product = sequence[0]*sequence[1]

    while (product < prod){
        let n = sequence.length
        // console.log(n)
        // console.log("seqN  = "+sequence[n-1])
        // console.log("seqN-1= " + sequence[n-2])
        sequence.push(sequence[n-2]+sequence[n-1])

        n = sequence.length //refresh sequence length
        product = sequence[n-1]*sequence[n-2]
        // console.log("Prod=  "+product)
        // console.log(sequence)
    }

    if(product===prod){
        // console.log("T="+sequence)
        return [sequence[sequence.length-2],sequence[sequence.length-1],true]
    }else{
        // console.log("F="+sequence)
        return [sequence[sequence.length-2],sequence[sequence.length-1],false]
    }

}

console.log(productFib(14))



