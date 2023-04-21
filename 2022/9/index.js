export function countTime(leds) {
  let times = 0
  while (true) {
    if (leds.every( led => led === 1)) break
    leds = leds.map( (led, i, self) => self.at(i - 1) ? 1 : led)
    times += 7
  }
  return times
}