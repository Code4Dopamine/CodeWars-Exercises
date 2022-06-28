/*
You are given a binary tree:
class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}

Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.
Return empty array if root is null.

Example 1 - following tree:
                 2
            8        9
          1  3     4   5

Should return following list:
[2,8,9,1,3,4,5]

Example 2 - following tree:
                 1
            8        4
              3        5
                         7

Should return following list:
[1,8,4,3,5,7]
*/

function treeByLevels (rootNode) {
    
    let result = []

    let currValue = rootNode.value
    let left = rootNode.left
    let right = rootNode.right

    //Loop through left side -> return depth

    //Loop thorugh right side, return depth? 

    //Get Value
    
    //Push (Left), Push (Right) (if !null)
    
	return [];

}


