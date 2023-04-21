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

/* Otra opción con reduce para la combinación */
function _getMaxGifts(giftsCities, maxGifts, maxCities) {
  return giftsCities
    .reduce((combinations, item) => {
       return combinations.concat(combinations.map(c => [...c, item]))
     }, [[]])
    .reduce((prev, mix, index, self) => {
      const total = mix.reduce((a, b) => a + b, 0)
      return (mix.length <= maxCities && total >= prev && total <= maxGifts)
        ? total
        : prev
    }, 0)   
 }

module.exports = getMaxGifts