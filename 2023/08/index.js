function organizeGifts(gifts) {
  const giftsArr = gifts.match(/\d+[a-zA-Z]/g)
  return giftsArr.reduce((acc, curr) => {
    const letter = curr[curr.length - 1]
    const number = Number(curr.replace(letter, ''))
      
    let palets = `[${letter}]`.repeat(Math.floor(number / 50))
    let boxes  = `{${letter}}`.repeat(Math.floor((number % 50) / 10)) 
    let one = letter.repeat(Math.floor(((number % 50) % 10)))
    
    return acc + palets + boxes + (one.length ? `(${one})` : '')
  }, '')
}

module.exports = {
  organizeGifts
}