function checkStepNumbers(systemNames, stepNumbers) {
  return Object.values(systemNames
    .reduce((acc, curr, i) => {
      acc[curr] = [
        ...(acc[curr] || []),
        stepNumbers[i]
      ]
      return acc
    }, {}))
    .every(nums => {
    const max = Math.max(...nums)
    return nums.indexOf(max) === (nums.length - 1)
  })
}

module.exports = {
  checkStepNumbers
}