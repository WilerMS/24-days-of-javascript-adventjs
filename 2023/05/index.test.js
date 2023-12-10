const { cyberReindeer } = require('./index.js')

describe('cyberReindeer', () => {

  test('cyberReindeer("S..|...|..", 10)', () => {
    expect(cyberReindeer("S..|...|..", 10)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S.."
    ])
  })

  
  test('cyberReindeer("S..|...|..", 10)', () => {
    expect(cyberReindeer("S..|...|..", 10)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S.."
    ])
  })

  test('cyberReindeer("S.|..", 6)', () => {
    expect(cyberReindeer("S.|..", 6)).toEqual([
      "S.|..",
      ".S|..",
      ".S|..",
      ".S|..",
      ".S|..",
      "..S.."
    ])
  })

  test('cyberReindeer("S.|.|.|......|.||.........", 8)', () => {
    expect(cyberReindeer("S.|.|.|......|.||.........", 8)).toEqual([
      "S.|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      "..S.*.*......*.**.........",
      "..*S*.*......*.**.........",
      "..*.S.*......*.**........."
    ])
  })  
})