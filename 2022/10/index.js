export function checkJump(heights) {
  const max = heights.indexOf(Math.max(...heights))
  if ([heights.length -1, 0].includes(max) ) return false
  return heights.every((height, i, self) => {
    const index = i != 0 ? i-1 : 0
    return (i <= max) 
      ? ( height >=  self[i - index]) 
      : ( height <=  self[i - 1])
  })
}