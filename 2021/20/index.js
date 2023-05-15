function pangram (letter) {
  const acentos = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U' }
  const text = letter
    .split('')
    .map(letra => acentos[letra] || letra)
    .join('')
    .toLowerCase()

  return 'abcdefghijklmnñopqrstuvwxyz'
    .split('')
    .every((item) => text.includes(item))
}

module.exports = {
  pangram
}
