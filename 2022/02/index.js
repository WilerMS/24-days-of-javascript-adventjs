function countHours (year, holidays) {
  return holidays.reduce((acc, curr) => {
    const day = new Date(`${curr}/${year}`).getDay()
    return [0, 6].includes(day) ? acc : acc + 2
  }, 0)
}

module.exports = countHours
