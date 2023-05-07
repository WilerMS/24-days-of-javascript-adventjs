function contarOvejas (ovejas) {
  return ovejas.filter(({ name, color }) => {
    return color === 'rojo' && name.toLowerCase().includes('n') && name.toLowerCase().includes('a')
  })
}

module.exports = {
  contarOvejas
}
