function contains (store, product) {
  return Object.keys(store).some(key => {
    if (typeof store[key] === 'string' && store[key] === product) return true
    if (typeof store[key] === 'object') return contains(store[key], product)
    return false
  })
}

module.exports = {
  contains
}
