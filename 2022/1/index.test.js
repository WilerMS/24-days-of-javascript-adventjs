const { wrapping } = require(".")

describe("1st challenge: ", () => {
  test("Test #01 - expected return type", () => {
    expect(Array.isArray(wrapping([]))).toBe(true)
  })

  test("Test #02 - expected wrapping(gifts)", () => {
    expect(wrapping(["cat", "game", "socks"])).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ])
  })

  test('Test #03 - expected wrapping(["midu"])', () => {
    expect(wrapping(["midu"])).toEqual(["******\n*midu*\n******"])
  })

  test('Test #04 - expected wrapping(["a"])', () => {
    expect(wrapping(["a"])).toEqual(["***\n*a*\n***"])
  })

  test("Test #05 - expected wrapping an empty array should return an empty array", () => {
    expect(wrapping([])).toEqual([])
  })

})
