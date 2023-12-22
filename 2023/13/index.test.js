const { calculateTime } = require('./index')

test('calculateTime(["00:10:00", "01:00:00", "03:30:00"])', () => {
  expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('-02:20:00')
})

test('calculateTime(["01:00:00", "05:00:00", "00:30:00"])', () => {
  expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toBe('-00:30:00')
})

test('calculateTime(["02:00:00", "05:00:00", "00:30:00"])', () => {
  expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00')
})

test('calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])', () => {
  expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toBe('-05:29:00')
})

test('calculateTime(["02:00:00", "03:00:00", "02:00:00"])', () => {
  expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe('00:00:00')
})

test('calculateTime(["01:01:01", "09:59:59", "01:01:01"])', () => {
  expect(calculateTime(['01:01:01', '09:59:59', '01:01:01'])).toBe('05:02:01')
})

test('calculateTime(["01:01:01", "03:59:59", "01:01:01", "00:57:58"])', () => {
  expect(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])).toBe('-00:00:01')
})
