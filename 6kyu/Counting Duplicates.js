/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
  let charDict = {};

  text
    .toLowerCase()
    .split("")
    .forEach((e) => {
      if (Object.keys(charDict).includes(e)) {
        charDict[e]++;
      } else {
        charDict[e] = 1;
      }
    });

  // console.log(charDict);
  // console.log(Math.max(...(Object.values(charDict))))

  let dupCounter = 0;
  Object.values(charDict).forEach(e => {
    if (e>1) dupCounter++;
  })

//   return Math.max(...Object.values(charDict));
  return dupCounter;

}

duplicateCount("Indivisibility");
duplicateCount("Indivisibilities");

