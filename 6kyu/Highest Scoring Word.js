/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: 
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    const wordArr = x.split(" ") //Split into individual words

    const points = "abcdefghijklmnopqrstuvwxyz".split("") //return points e.g. a = 0, b = 1, etc.

    //Return Point each Word
    let pointsArr = wordArr.map(e => {
      let totalPoints = 0;
      e.split("").forEach(x => {
        totalPoints+= points.indexOf(x)+1 //Apply appropriate point value
      })
      return totalPoints
    })

    // console.log(pointsArr)
  //   console.log(Math.max(pointsArr))

    // Get Max Point Index Position and return word
    const maxPointIndex = pointsArr.indexOf(Math.max(...pointsArr))
    return wordArr[maxPointIndex]
  }