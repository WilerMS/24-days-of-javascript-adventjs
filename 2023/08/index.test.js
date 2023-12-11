const { organizeGifts } = require('./index.js')

describe('organizeGifts', () => {
  it('should organize gifts from the input "76a11b"', () => {
    const result = organizeGifts("76a11b")
    const expected = "[a]{a}{a}(aaaaaa){b}(b)"
    expect(result).toBe(expected)
  })

  it('should organize gifts from the input "20a"', () => {
    const result = organizeGifts("20a")
    const expected = "{a}{a}"
    expect(result).toBe(expected)
  })

  it('should organize gifts from the input "70b120a4c"', () => {
    const result = organizeGifts("70b120a4c")
    const expected = "[b]{b}{b}[a][a]{a}{a}(cccc)"
    expect(result).toBe(expected)
  })

  it('should organize gifts from the input "9c"', () => {
    const result = organizeGifts("9c")
    const expected = "(ccccccccc)"
    expect(result).toBe(expected)
  })

  it('should organize gifts from the input "19d51e"', () => {
    const result = organizeGifts("19d51e")
    const expected = "{d}(ddddddddd)[e](e)"
    expect(result).toBe(expected)
  })
})
