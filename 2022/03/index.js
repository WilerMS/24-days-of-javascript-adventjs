function distributeGifts (packOfGifts, reindeers) {
  const numOfGifts = packOfGifts.reduce((a, c) => a + c.length, 0)
  const numOfReindeers = reindeers.reduce((a, c) => a + c.length * 2, 0)
  return Math.floor(numOfReindeers / numOfGifts)
}

module.exports = distributeGifts
