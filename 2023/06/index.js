function maxDistance(movements) {
  let distance = 0
  let free = 0
  for(const mov of movements) {
    if(mov === '>') distance++
    else if(mov === '<') distance--
    else if(mov === '*') free++
  }

  return Math.abs(distance) + free
}

module.exports = {
  maxDistance
}