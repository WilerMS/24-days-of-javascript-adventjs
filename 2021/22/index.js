function countDecorations (bigTree) {
  let left = 0
  let right = 0

  if (bigTree.left) {
    left = countDecorations(bigTree.left)
  }

  if (bigTree.right) {
    right = countDecorations(bigTree.right)
  }

  return bigTree.value + left + right
}

module.exports = {
  countDecorations
}
