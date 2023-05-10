function groupBy (collection, it) {
  return collection.reduce((acc, curr) => {
    const value = (typeof it === 'function') ? it(curr) : curr[it]
    return {
      ...acc,
      [value]: [...(acc[value] ?? []), curr]
    }
  }, {})
}

module.exports = {
  groupBy
}
