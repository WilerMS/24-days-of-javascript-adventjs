function sumPairs (numbers, result) {
  const obj = {}
  const sum = {}
  for (const number of numbers) {
    if (obj[result - number]) {
      sum[number] = [result - number, number]
      sum[result - number] = [result - number, number]
    }
    obj[number] = true
  }

  for (const number of numbers) {
    if (sum[number] && !Object.keys(obj[number]).length) return sum[number]
  }

  return null
}

function _sumPairs (numbers, result) {
  const obj = {}

  const sums = numbers.reduce((acc, curr, i, self) => {
    if (obj[result - curr]) {
      acc[curr] = [result - curr, curr]
      acc[result - curr] = [result - curr, curr]
    }
    obj[curr] = true
    return acc
  }, {})

  for (const number of numbers) {
    if (sums[number] && !Object.keys(obj[number]).length) return sums[number]
  }

  return null
}

module.exports = {
  sumPairs,
  _sumPairs
}
