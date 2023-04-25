function decorateTree(base) {
  const combinations = {
    'PP': 'P',
    'BB': 'B',
    'RR': 'R',
    'BR': 'P',
    'RP': 'B',
    'BP': 'R',
    'RB': 'P',
    'PR': 'B',
    'PB': 'R',
  }

  let i = 1
  let current = base.split(' ')
  let formed = [base]

  while (current.length > 1) {

    let newArr = []

    for (let j = 1; j <= current.length - 1; j++) {
      const combination = current[j-1] + current[j]
      newArr.push( combinations[combination] )
    }

    formed[i] = newArr.join(' ')
    current = newArr
    i++
  }

  return formed.reverse()
}

module.exports = {
  decorateTree
}