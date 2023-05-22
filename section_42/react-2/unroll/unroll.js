function unroll(squareArray) {
    const result = [];
    let topRow = 0,
        bottomRow = squareArray.length - 1,
        leftColumn = 0,
        rightColumn = squareArray.length - 1;
  
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
      for (let i = leftColumn; i <= rightColumn; i++) {
        result.push(squareArray[topRow][i]);
      }
      topRow++;
  
      for (let i = topRow; i <= bottomRow; i++) {
        result.push(squareArray[i][rightColumn]);
      }
      rightColumn--;
  
      if (topRow <= bottomRow) {
        for (let i = rightColumn; i >= leftColumn; i--) {
          result.push(squareArray[bottomRow][i]);
        }
        bottomRow--;
      }
  
      if (leftColumn <= rightColumn) {
        for (let i = bottomRow; i >= topRow; i--) {
          result.push(squareArray[i][leftColumn]);
        }
        leftColumn++;
      }
    }
  
    return result;
  }
  
  module.exports = unroll;