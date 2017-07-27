export default {
  randHash() {
    let hash = '#'
    const letters = '1234567890abcdef'
    // todo reafctor this func later
    for (var i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * 16)]
    }

    return hash
  }
}