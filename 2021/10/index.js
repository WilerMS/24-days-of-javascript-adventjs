function getCoins (change) {
  const coins = [50, 20, 10, 5, 2, 1]
    .reduce((acc, curr) => {
      return {
        ...acc,
        change: [...acc.change, Math.floor(acc.rest / curr)],
        rest: acc.rest % curr
      }
    }, { change: [], rest: change })
  return coins.change.reverse()
}

module.exports = {
  getCoins
}
