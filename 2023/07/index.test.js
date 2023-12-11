const { drawGift } = require('./index.js')

describe('drawGift', () => {
  it('should draw a gift with size 4 and symbol +', () => {
    const result = drawGift(4, '+')
    const expected = `
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`.trim()
    expect(result).toBe(expected)
  })

  it('should draw a gift with size 5 and symbol *', () => {
    const result = drawGift(5, '*')
    const expected = `
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`.trim()
    expect(result).toBe(expected)
  })

  it('should draw a gift with size 1 and symbol ^', () => {
    const result = drawGift(1, '^')
    const expected = '#'
    expect(result).toBe(expected)
  })
})
