function findNaughtyStep(original, modified) {
  const biggest = original.length > modified.length ? original : modified
  for (let i = 0; i < biggest.length; i++) {
    if (original[i] !== modified[i]) return biggest[i]
  }
  return ''
}

module.exports = {
  findNaughtyStep
}