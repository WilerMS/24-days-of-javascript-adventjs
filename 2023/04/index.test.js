const decode = require('./index.js') 

describe('decode function tests', () => {

  test('decodes a string with one set of parentheses', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
  })

  test('decodes a string with two sets of parentheses', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
  })

  test('decodes a string with nested parentheses', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
  })

  test('decodes a string without parentheses', () => {
    expect(decode('hello world')).toBe('hello world')
  })

  test('decodes an empty string', () => {
    expect(decode('')).toBe('')
  })

  test('decodes a string with multiple non-nested parentheses', () => {
    expect(decode('(abc) (def) (ghi)')).toBe('cba fed ihg')
  })

  test('decodes a string with complex nested parentheses', () => {
    expect(decode('a(b(c)d)e')).toBe('acbde')
  })
})
