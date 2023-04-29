class BinarySearchNode {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** find: search for val using binary search. */

  find(sought) {
    let current = this;

    while (current) {
      if (current.val === sought) 
        return current;

      current = sought < current.val
                ? current.left
                : current.right;
    }
  }
  // end
}
// end



let apple = new BinarySearchNode("apple")
let ghost = new BinarySearchNode("ghost")
let fence = new BinarySearchNode("fence", apple, ghost)
let just = new BinarySearchNode("just")
let jackal = new BinarySearchNode("jackal", fence, just)
let zebra = new BinarySearchNode("zebra")
let pencil = new BinarySearchNode("pencil", null, zebra)
let mystic = new BinarySearchNode("mystic")
let nerd = new BinarySearchNode("nerd", mystic, pencil)
let money = new BinarySearchNode("money", jackal, nerd)

console.log("nerd = ", money.find("nerd"))
console.log("banana = ", money.find("banana"))
