/* 
Task: You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples:
A size 3 diamond:
 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:
  *
 ***
*****
 ***
  *
...that is:
"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n) {
  console.log("N=" + n);
  if ((n <= 0) | (n % 2 === 0)) return null;

  //Initial Push of stars(n)
  let starList = [];
  starList.push(stars(n));

  let counter = 1;
  for (let i = n - 2; i >= 1; i -= 2) {
    // Add in front and in the back
    starList.push(spacing(counter) + stars(i));
    starList.unshift(spacing(counter) + stars(i));
    counter++; //Update Spaceing Row Counter
  }

  // Print Spaces
  function spacing(x) {
    let spaces = "";
    for (let i = 0; i < x; i++) {
      spaces += " ";
    }
    // console.log(spaces.length)
    return spaces;
  }

  //Print Star Rows
  function stars(y) {
    let str = "";
    for (let i = 0; i < y; i++) {
      str += "*";
    }
    str += "\n";
    return str;
  }

  // console.log(starList.join(""))
  return starList.join("");
}
