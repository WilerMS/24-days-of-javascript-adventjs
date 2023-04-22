function getGiftsToRefill(a1, a2, a3) {
  const a = a1.filter(gift => !(a2.includes(gift) || a3.includes(gift)))
  const b = a2.filter(gift => !(a1.includes(gift) || a3.includes(gift)))
  const c = a3.filter(gift => !(a1.includes(gift) || a2.includes(gift)))
  return [...new Set(a.concat(b, c))]
}