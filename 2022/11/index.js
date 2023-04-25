function getCompleted(part, total) {
  const partArr = part.split(':').map(p => Number(p))
  const totalArr = total.split(':').map(p => Number(p))
  
  const partSeconds = partArr[0] * 3600 + partArr[1] * 60 + partArr[2]
  const totalSeconds = totalArr[0] * 3600 + totalArr[1] * 60 + totalArr[2]
  
  let [mcd, totalPart] = [partSeconds, totalSeconds]
  while (totalPart !== 0) [mcd, totalPart] = [totalPart, mcd % totalPart]
  
  return (totalSeconds % partSeconds === 0)
    ? `1/${totalSeconds/partSeconds}`
    : `${partSeconds/mcd}/${totalSeconds/mcd}`
}

module.exports = {
  getCompleted
}