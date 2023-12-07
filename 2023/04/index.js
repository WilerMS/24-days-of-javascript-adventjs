function decode(message) {
  let shouldRepeat = true
  while (shouldRepeat) {
    const currentOpen = message.lastIndexOf('(')
    const currentClose = message.indexOf(')', currentOpen)
    const start = message.substring(0, currentOpen)
    const end = message.substring(currentClose + 1, message.length)
    const middle = message.substring(currentOpen + 1, currentClose)
    
    message = `${start}${middle.split('').reverse().join('')}${end}`
    shouldRepeat = (message.includes('('))
  }
  return message
}

module.exports = {
  decode
}