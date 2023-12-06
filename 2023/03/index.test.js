const { findNaughtyStep } = require('./index')

describe('findNaughtyStep', () => {
  test('debería retornar "e" cuando se añade al final', () => {
    const original = 'abcd'
    const modified = 'abcde'
    expect(findNaughtyStep(original, modified)).toBe('e')
  })

  test('debería retornar "f" cuando se elimina del medio', () => {
    const original = 'stepfor'
    const modified = 'stepor'
    expect(findNaughtyStep(original, modified)).toBe('f')
  })

  test('debería retornar una cadena vacía si no hay cambios', () => {
    const original = 'abcde'
    const modified = 'abcde'
    expect(findNaughtyStep(original, modified)).toBe('')
  })
})