function sortToys(toys, positions) {
  return positions
    .map((position, i) => [position, toys[i]])
    .sort((a, b) => a[0] - b[0])
    .map(position => position[1])
}

module.exports = {
  sortToys
}