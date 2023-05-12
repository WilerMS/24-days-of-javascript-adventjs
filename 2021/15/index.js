function checkSledJump (heights) {
  const max = heights.indexOf(Math.max(...heights))
  if ([heights.length - 1, 0].includes(max)) return false

  return heights.every((height, i, self) => {
    if (i === 0) return true
    return (i <= max)
      ? (height > self[i - 1])
      : (height < self[i - 1])
  })
}

module.exports = {
  checkSledJump
}
