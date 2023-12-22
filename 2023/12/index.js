function checkIsValidCopy(original, copy) {
  const degradations = {
    'minus': ['#','+',':','.',' '],
    '#': ['+',':','.',' '],
    '+': [':','.',' '],
    ':': ['.',' '],
    '.': [' '],
    ' ': []
  }

  return original.split('').every((letter, i) => {
    const isUpper = /^[A-Z]$/.test(letter)
    const isLower = /^[a-z]$/.test(letter)
        
    if (letter === copy[i] || (isUpper && letter.toLowerCase() === copy[i])) {
      return true
    }
    
    const key = !isUpper && !isLower  ? letter : 'minus'
    return degradations[key].includes(copy[i])
  })
}

module.exports = {
  checkIsValidCopy
}