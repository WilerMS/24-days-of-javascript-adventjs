function drawGift(size, symbol) {
  if (size === 1) return '#\n';

  const borders = '#'.repeat(size)

  let first = ''
  let second = ''
  for (let i = 2; i < size; i++) {
    const spaces = ' '.repeat(size - i)
    first += `${spaces}#${symbol.repeat(size - 2)}#${symbol.repeat(i - 2)}#\n`
    second += `#${symbol.repeat(size - 2)}#${symbol.repeat(size - i -1)}#\n`
  }

  const start = ' '.repeat(size - 1) + borders
  const middle = borders + symbol.repeat(size - 2)

  return `${start}\n${first}${middle}#\n${second}${borders}\n`
}

module.exports = {
  drawGift
}