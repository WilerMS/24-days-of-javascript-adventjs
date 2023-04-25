function printTable(gifts) {

  const [ln, lq] = gifts.reduce((acc, {name, quantity}) => ([
    name.length > acc[0] ? name.length : acc[0], 
    `${quantity}`.length > acc[1] ? `${quantity}`.length : acc[1]
  ]), [4, 8])

  const top = `${'+'.repeat(ln + lq + 7)}\n`
  const hLeft = `| Gift${' '.repeat(ln-4)} |`
  const hRight = ` Quantity${' '.repeat(lq-8)} |\n`
  const subHeader = `| ${'-'.repeat(ln)} | ${'-'.repeat(lq)} |\n`
  const bottom = '*'.repeat(ln + lq + 7)
  
  const body = gifts
    .map(({name, quantity}) => {
      const first = `${name}${' '.repeat(ln - name.length)}`
      const second = `${quantity}${' '.repeat(lq - `${quantity}`.length)}`
      return `| ${first} | ${second} |\n`
    })
    .join('')

  return top + hLeft + hRight + subHeader + body + bottom
}

module.exports = {
  printTable
}