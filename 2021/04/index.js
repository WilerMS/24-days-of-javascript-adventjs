function createXmasTree (height) {
  let top = ''
  for (let i = 1; i <= height; i++) {
    const floor = '_'.repeat(height - i)
    top += `${floor}${'*'.repeat(2 * i - 1)}${floor}\n`
  }

  const floor = '_'.repeat(height - 1)
  const bottom = `${floor}#${floor}\n${floor}#${floor}`

  return top + bottom
}

module.exports = {
  createXmasTree
}
