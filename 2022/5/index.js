function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let mixes = [[]]
  for (let item of giftsCities) {
    const length = mixes.length
    for (let i = 0; i < length; i++) {
      mixes.push([...mixes[i], item])
    }
  }
  
 return mixes
   .reduce((prev, mix) => {
     const total = mix.reduce((a, b) => a + b, 0)
     return (mix.length <= maxCities && total >= prev && total <= maxGifts)
       ? total
       : prev
   }, 0)   
}

module.exports = getMaxGifts