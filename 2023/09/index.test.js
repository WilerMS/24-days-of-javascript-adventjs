const { adjustLights } = require('./index.js')

describe('adjustLights', () => {
  it('should adjust lights for ["🟢", "🔴", "🟢", "🟢", "🟢"]', () => {
    const result = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])
    const expected = 1
    expect(result).toBe(expected)
  })

  it('should adjust lights for ["🔴", "🔴", "🟢", "🟢", "🔴"]', () => {
    const result = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])
    const expected = 2
    expect(result).toBe(expected)
  })

  it('should adjust lights for ["🟢", "🔴", "🟢", "🔴", "🟢"]', () => {
    const result = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])
    const expected = 0
    expect(result).toBe(expected)
  })

  it('should adjust lights for ["🔴", "🔴", "🔴"]', () => {
    const result = adjustLights(["🔴", "🔴", "🔴"])
    const expected = 1
    expect(result).toBe(expected)
  })
})
