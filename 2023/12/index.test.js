const { checkIsValidCopy } = require('./index')

test('checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")', () => {
  expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toBe(true)
})

test('checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#")', () => {
  expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')).toBe(false)
})

test('checkIsValidCopy("Santa Claus", " Santa Claus ")', () => {
  expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toBe(false)
})

test('checkIsValidCopy("Santa Claus", "###:. c:+##")', () => {
  expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(true)
})

test('checkIsValidCopy("Santa Claus", "sant##claus+")', () => {
  expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toBe(false)
})

test('checkIsValidCopy("S#n:a Claus", "S#+:. c:. s")', () => {
  expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')).toBe(true)
})

test('checkIsValidCopy("Santa Claus", "s#+:.#c:. s")', () => {
  expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
})

test('checkIsValidCopy("s+#:.#c:. s", "s#+:.#c:. s")', () => {
  expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toBe(false)
})

test('checkIsValidCopy("S#nta Claus", "S#ntA ClauS")', () => {
  expect(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')).toBe(false)
})

test('checkIsValidCopy("3 #egalos", "3 .+:# #:")', () => {
  expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toBe(true)
})
