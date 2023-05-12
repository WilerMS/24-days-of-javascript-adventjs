function decodeNumber (symbols) {
  const symbolsDict = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }
  return symbols
    .split('')
    .map(symbol => symbolsDict[symbol])
    .reduce((acc, curr, i, self) => {
      if (i === self.length - 1) return acc + curr
      return (curr >= self[i + 1]) ? acc + curr : acc - curr
    }, 0)
}

module.exports = {
  decodeNumber
}
