function listGifts (letter) {
  return letter
    .split(' ')
    .filter(Boolean)
    .reduce((acc, curr) => {
      if (curr.startsWith('_')) return acc
      return {
        ...acc,
        [curr]: (acc[curr] || 0) + 1
      }
    }, {})
}

module.exports = {
  listGifts
}
