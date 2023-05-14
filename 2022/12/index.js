function selectSleigh (distance, sleighs) {
  const bests = sleighs.filter(s => s.consumption * distance <= 20)
  return bests.length
    ? bests.pop().name
    : null
}

module.exports = {
  selectSleigh
}
