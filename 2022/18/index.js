function dryNumber(dry, numbers) {
  const listOfNumbers = [...Array(numbers).keys()]
  return listOfNumbers
    .filter(x => `${x + 1}`.includes(`${dry}`))
    .map(x => x + 1)
}

module.exports = {
  dryNumber
}