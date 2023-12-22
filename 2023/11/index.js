function getIndexsForPalindrome(word) {
  const reversed = word.split('').reverse().join('')
  if (reversed === word) return []

  for (let i = 0; i < word.length - 1; i++) {
    for (let j = 1; j < word.length; j++) {
      let newWord = word.split('')
      const temp = newWord[i]
      newWord[i] = newWord[j]
      newWord[j] = temp

      const storageWord = [...newWord]

      const reversed = newWord.reverse().join('')
      if (reversed === storageWord.join('')) return [i, j]
    }
  }

  return null
}

module.exports = {
  getIndexsForPalindrome
}

