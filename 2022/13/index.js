function getFilesToBackup(lastBackup, changes) {
  const cambiados = changes
    .filter(change => change[1] > lastBackup)
    .map(change => change[0])
    .sort((a, b) => a - b)
  return [...new Set(cambiados)]
}

module.exports = {
  getFilesToBackup
}