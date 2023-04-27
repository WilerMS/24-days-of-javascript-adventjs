function checkPart(part) {
  return part
    .split('')
    .some((_, i, self) => {
      const text = self.filter((_, j) => j != i)
      return text.join('') === text.reverse().join('')
    })
}

module.exports = {
  checkPart
}