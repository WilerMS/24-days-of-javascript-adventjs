function manufacture(gifts, materials) {
  return gifts.filter(g => g.split('').every(l => materials.includes(l)))
}

function manufacture2(gifts, materials) {
  return gifts.filter(gift => {
    return gift.split('').every(l => materials.includes(l))
  })
}

function manufacture3(gifts, materials) {
  return gifts.filter(gift => {
    const x = [...new Set(...[gift + materials])]

    return x.length == materials.length
  })
}

module.exports = {
  manufacture,
  manufacture2,
  manufacture3,
}


