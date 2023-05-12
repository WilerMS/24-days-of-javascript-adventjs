function missingReindeer (ids) {
  return Array
    .from({ length: Math.max(...ids) + 2 })
    .findIndex((_, index) => {
      return !ids.includes(index)
    })
}

module.exports = {
  missingReindeer
}
