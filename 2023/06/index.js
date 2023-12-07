function maxDistance(movements) {
  let distance = 0
  let free = 0
  for(const movement of movements) {
    if(movement === '>') distance++
    else if(movement === '<') distance--
    else if(movement === '*') free++
  }

  return Math.abs(distance) + free
}

module.exports = {
  maxDistance
}