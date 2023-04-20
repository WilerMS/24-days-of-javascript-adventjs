function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => (a.l - b.l || a.w - b.w || a.w - b.w) )
    .every((box, i, self) => { 
      return (i === 0) ? true : (
        box.l >  self[i -1 ].l
        && box.w > self[i -1].w
        && box.h > self[i -1].h
      )
    })
}

module.exports = fitsInOneBox