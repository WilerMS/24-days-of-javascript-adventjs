function cyberReindeer(road, time) {
  let cleanRoad = road.replace('S', '.')
  let arr = []
  let currentIndex = 0
  for (let i = 0; i < time; i++) {
    const str = cleanRoad.split('')
    if (cleanRoad[currentIndex] !== '|') {
      str[currentIndex] = 'S'
      currentIndex++
    } else {
      str[currentIndex - 1] = 'S'
    }
    
    arr.push(str.join(''))
    if (i === 4) cleanRoad = cleanRoad.replaceAll('|', '*')
  }
  return arr
}

module.exports = {
  cyberReindeer
}