function createChristmasTree(ornaments, height) {
  let result = ''
  let current = 0
  for (let i = 1; i <= height; i++) {
    result += ' '.repeat(height - i)
    for (let j = 0; j < i; j++) {
      result += `${ornaments[current]} `
      current = (current >= ornaments.length -1) ? 0 : current + 1
    }
    result = result.trimEnd() + '\n'
  }
  return result + ' '.repeat(height - 1) + '|\n'
}

module.exports = {
  createChristmasTree
}