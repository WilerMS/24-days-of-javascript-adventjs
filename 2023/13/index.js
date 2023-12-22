function calculateTime(deliveries) {

  const time = deliveries.reduce((acc, curr) => {
    let [hours, mins, secs] = curr.split(':')
    return acc + +hours * 3600 + +mins * 60 + +secs
  }, 0)
  
  const rest = 7 * 3600 - time
  const absRest = Math.abs(rest)
  const sign = rest > 0 ? '-': ''
  
  const hours = `${Math.floor(absRest / 3600)}`.padStart(2, '0')
  const mins = `${Math.floor((absRest % 3600) / 60)}`.padStart(2, '0')
  const secs = `${(absRest % 3600) % 60}`.padStart(2, '0')

  return `${sign}${hours}:${mins}:${secs}`
}

module.exports = {
  calculateTime
}