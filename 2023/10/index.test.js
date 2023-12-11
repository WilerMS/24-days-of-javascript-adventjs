const { createChristmasTree } = require('./index.js')

describe('createChristmasTree', () => {
  it('should create a Christmas tree with "x" ornaments and height 3', () => {
    const result = createChristmasTree("x", 3)
    const expected = "  x\n x x\nx x x\n  |\n"
    expect(result).toBe(expected)
  })

  it('should create a Christmas tree with "xo" ornaments and height 4', () => {
    const result = createChristmasTree("xo", 4)
    const expected = "   x\n  o x\n o x o\nx o x o\n   |\n"
    expect(result).toBe(expected)
  })

  it('should create a Christmas tree with "123" ornaments and height 5', () => {
    const result = createChristmasTree("123", 5)
    const expected = "    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n"
    expect(result).toBe(expected)
  })

  it('should create a Christmas tree with "*@o" ornaments and height 3', () => {
    const result = createChristmasTree("*@o", 3)
    const expected = "  *\n @ o\n* @ o\n  |\n"
    expect(result).toBe(expected)
  })
})
