function shouldBuyFidelity (times) {
  const withoutFidelity = 12 * times
  const withFidelity = Array
    .from({ length: times })
    .reduce(acc => ({
      unitPrice: acc.unitPrice * 0.75,
      total: acc.total + acc.unitPrice * 0.75
    }), { unitPrice: 12, total: 250 })
  return withoutFidelity > withFidelity.total
}

module.exports = {
  shouldBuyFidelity
}
