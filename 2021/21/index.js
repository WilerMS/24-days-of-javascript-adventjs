function canCarry (capacity, trip) {
  let acc = 0
  const max = Math.max(...trip.map(item => item[2]))
  const min = Math.min(...trip.map(item => item[1]))
  const carry = trip.reduce((acc, curr) => ({
    ...acc, [curr[1]]: (acc[curr[1]] || 0) + curr[0]
  }), {})
  const leave = trip.reduce((acc, curr) => ({
    ...acc, [curr[2]]: (acc[curr[2]] || 0) + curr[0]
  }), {})

  for (let i = min; i <= max; i++) {
    acc = acc - (leave[i] ?? 0) + (carry[i] ?? 0)
    if (acc > capacity) return false
  }
  return true
}

module.exports = {
  canCarry
}
