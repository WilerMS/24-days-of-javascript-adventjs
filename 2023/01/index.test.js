const { findFirstRepeated } = require('./index')

describe('findFirstRepeated', () => {
  test('debería retornar 3 como el primer id repetido', () => {
    const giftIds = [2, 1, 3, 5, 3, 2]
    expect(findFirstRepeated(giftIds)).toBe(3)
  })

  test('debería retornar -1 cuando no hay elementos repetidos', () => {
    const giftIds2 = [1, 2, 3, 4]
    expect(findFirstRepeated(giftIds2)).toBe(-1)
  })

  test('debería retornar 5 como el primer id repetido cuando 5 y 1 se repiten', () => {
    const giftIds3 = [5, 1, 5, 1]
    expect(findFirstRepeated(giftIds3)).toBe(5)
  })
})