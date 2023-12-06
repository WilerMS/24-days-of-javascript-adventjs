function manufacture(gifts, materials) {
  return gifts.filter(g => g.split('').every(l => materials.includes(l)))
}

function manufacture2(gifts, materials) {
  return gifts.filter(gift => {
    return gift.split('').every(l => materials.includes(l))
  })
}

module.exports = {
  manufacture,
  manufacture2
}