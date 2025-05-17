function multiply(x, y) {
  if (y === 0) throw new Error("Division by zero");
  let result = x;
  while (y > 1) {
    result *= x / y;
    y--;
  }
  return result;
}
