function daysToXmas (date) {
  const now = new Date('Dec 25, 2021').getTime()
  const time = new Date(date).getTime()
  return Math.ceil((now - time) / 3600 / 24 / 1000)
}

module.exports = {
  daysToXmas
}
