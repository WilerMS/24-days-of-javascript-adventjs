function isValid (letter) {
  let parentesisFound = false
  let lastLetter = ''

  for (const l of letter) {
    if (['{', '['].includes(l)) return false

    if (l === '(') {
      if (parentesisFound) return false
      parentesisFound = true
      lastLetter = l
      continue
    }

    if (l === ')') {
      if (!parentesisFound || lastLetter === '(') return false
      parentesisFound = false
      lastLetter = l
      continue
    }

    lastLetter = l
  }

  return !parentesisFound
}

module.exports = {
  isValid
}
