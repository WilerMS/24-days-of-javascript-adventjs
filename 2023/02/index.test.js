const { manufacture2 } = require('./index')

describe('manufacture2', () => {
  test('debería retornar ["tren", "oso"] para los materiales dados', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    expect(manufacture2(gifts, materials)).toEqual(['tren', 'oso'])
  })

  test('debería retornar ["puzzle"] para los materiales dados', () => {
    const gifts = ['juego', 'puzzle']
    const materials = 'jlepuz'
    expect(manufacture2(gifts, materials)).toEqual(['puzzle'])
  })

  test('debería retornar un arreglo vacío si ninguno de los regalos puede ser fabricado', () => {
    const gifts = ['libro', 'ps5']
    const materials = 'psli'
    expect(manufacture2(gifts, materials)).toEqual([])
  })
})
