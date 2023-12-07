const maxDistance = require('./index.js') 

describe('maxDistance function tests', () => {
  test('should return 2 for movements ">>*<"', () => {
    const movements = '>>*<'
    const result = maxDistance(movements)
    expect(result).toBe(2)
  })

  test('should return 2 for movements "<<<>"', () => {
    const movements2 = '<<<>'
    const result2 = maxDistance(movements2)
    expect(result2).toBe(2)
  })

  test('should return 5 for movements ">***>"', () => {
    const movements3 = '>***>'
    const result3 = maxDistance(movements3)
    expect(result3).toBe(5)
  })
})
