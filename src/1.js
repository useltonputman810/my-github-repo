function getRandomCode() {
  const codes = ["ABC", "DEF", "GHI", "JKL"];
  return codes[Math.floor(Math.random() * codes.length)];
}
