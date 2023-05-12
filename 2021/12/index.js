function getMinJump (obstacles) {
  const max = Math.max(...obstacles) + 2
  const path = Array
    .from({ length: max })
    .map((_, index) => obstacles.includes(index))

  let currentJump = 1
  for (let i = 1; i <= max; i++) {
    const isValidJump = path.every((position, j) => {
      return (j % i === 0) ? !position : true
    })
    currentJump = isValidJump ? i : currentJump
    if (isValidJump) break
  }

  return currentJump
}

module.exports = {
  getMinJump
}
