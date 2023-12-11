function adjustLights(lights) {
  const max = lights.reduce((acc, curr, i, arr) => {
    if (i % 2 === 0) {
      acc[0] += (curr === '🔴' ? 1 : 0)
      acc[1] += (curr === '🟢' ? 1 : 0)
    } else {
      acc[1] += (curr !== '🟢' ? 1 : 0)
      acc[0] += (curr !== '🔴' ? 1 : 0)
    }

    return acc
  }, [0, 0])

  return Math.min(...max)
}

module.exports = {
  adjustLights
}