function getRandomInt(max) {
  var maxNumber = max < 0 ? -max : max;
  return Math.floor(Math.random() * maxNumber);
}

// Example usage
console.log(getRandomInt(10) + " " + getRandomInt(10));
