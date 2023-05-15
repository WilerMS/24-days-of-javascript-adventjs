function learn (time, courses) {
  let maxSum = { i: null, j: null, sum: 0 }
  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const sum = courses[i] + courses[j]
      if (sum <= time && maxSum.sum < sum) {
        maxSum = { i, j, sum }
      }
    }
  }
  return ![maxSum.i, maxSum.j].includes(null) ? [maxSum.i, maxSum.j] : null
}

module.exports = {
  learn
}
