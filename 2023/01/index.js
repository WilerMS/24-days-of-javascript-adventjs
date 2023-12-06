function findFirstRepeated(gifts) {
  const c = new Set()
  for (const g of gifts) {
    if (c.has(g)) return g
    c.add(g)
  }
  return -1
}

module.exports = {
  findFirstRepeated
}