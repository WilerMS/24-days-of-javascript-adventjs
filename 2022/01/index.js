function wrapping (gifts) {
  return gifts.map((gift) => {
    const stars = '*'.repeat(gift.length + 2)
    return `${stars}\n*${gift}*\n${stars}`
  })
}

module.exports = {
  wrapping
}
