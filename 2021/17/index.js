function countPackages (carriers, carrierID) {
  const dict = carriers.reduce((a, c) => {
    return { ...a, [c[0]]: [c[1], c[2]] }
  }, {})

  const subPacks = dict[carrierID][1].reduce((acc, curr) => {
    return acc + countPackages(carriers, curr)
  }, 0)

  return dict[carrierID][0] + subPacks
}

module.exports = {
  countPackages
}
