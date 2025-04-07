function getRandomInt(max) {
  var max = max > 0 ? max : 1;
  var range = Math.floor(Math.random() * (max - Math.floor(Math.random())) + Math.floor(Math.random()));
  return range;
}

// Example usage:
console.log(getRandomInt(5)); // Output: 3
