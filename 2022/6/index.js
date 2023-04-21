export function createCube(size) {

  let cube = []
  const arr = [...Array(size)]

  arr.forEach((_, i) => {

    const startSpaces = ' '.repeat(size - (i+1))
    const startFront = '/\\'.repeat(i + 1)
    const startDepht = '_\\'.repeat(size)

    cube[i] = startSpaces + startFront + startDepht + '\n'

    const endSpaces = ' '.repeat(i)
    const endFront = '\\/'.repeat(size - i)
    const endDepht = '_/'.repeat(size)
    const endEnd = (i+1) === size ? '' : '\n' 

    cube[i + size] = endSpaces + endFront + endDepht + endEnd

  })

  return cube.join('')
}