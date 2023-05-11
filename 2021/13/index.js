function wrapGifts (gifts) {
  if (!gifts.length) return []

  const involvedGifts = gifts.map((gift) => `*${gift}*`)
  const topBottom = `*${'*'.repeat(gifts[0].length)}*`

  return [
    topBottom,
    ...involvedGifts,
    topBottom
  ]
}

module.exports = {
  wrapGifts
}
