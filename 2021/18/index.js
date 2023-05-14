function fixFiles (files) {
  const filesDict = {}
  return files.map((item) => {
    filesDict[item] = (filesDict[item] ?? 0) + 1
    return (filesDict[item] > 1)
      ? `${item}(${filesDict[item] - 1})`
      : item
  })
}

module.exports = {
  fixFiles
}
