/*
 * Unroll
 */
function unroll(squareArray) {
  const size = squareArray.length;
  const result = [];

  for (let i = 0; i < Math.floor(size / 2); i++) {
    let top = i;
    let left = i;
    let bottom = size - i - 1;
    let right = bottom;

    // Go from left to right >>>>
    for (let x = left; x < right; x++) {
      result.push(squareArray[top][x]);
    }

    // Go from the upper right corner, down ↓
    for (let y = top; y < bottom; y++) {
      result.push(squareArray[y][right])
    }

    // Go from the lower right corner, to the left  <<<<
    for (let x = right; x > left; x--) {
      result.push(squareArray[bottom][x]);
    }

    // Go from the lower left corner to the top
    for (let y = bottom; y > top; y--) {
      result.push(squareArray[y][left]);
    }
  }

  // Handle the middle case if the matrix is an odd number size
  if (size % 2 !== 0) {
    let index = Math.floor(size/2);
    result.push(squareArray[index][index]);
  }

  return result;
}

module.exports = unroll;