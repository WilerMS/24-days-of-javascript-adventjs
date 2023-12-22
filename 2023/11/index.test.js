const { getIndexsForPalindrome } = require('./index')

test('getIndexsForPalindrome("anna")', () => {
  expect(getIndexsForPalindrome('anna')).toEqual([])
})

test('getIndexsForPalindrome("abab")', () => {
  expect(getIndexsForPalindrome('abab')).toEqual([0, 1])
})

test('getIndexsForPalindrome("abac")', () => {
  expect(getIndexsForPalindrome('abac')).toBeNull()
})

test('getIndexsForPalindrome("aaaaaaaa")', () => {
  expect(getIndexsForPalindrome('aaaaaaaa')).toEqual([])
})

test('getIndexsForPalindrome("aaababa")', () => {
  expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
})

test('getIndexsForPalindrome("caababa")', () => {
  expect(getIndexsForPalindrome('caababa')).toBeNull()
})

test('getIndexsForPalindrome("rotavator")', () => {
  expect(getIndexsForPalindrome('rotavator')).toEqual([])
})

test('getIndexsForPalindrome("rotaratov")', () => {
  expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8])
})
