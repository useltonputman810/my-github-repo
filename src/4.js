function getRandomInt(max) {
  const min = Math.ceil(0);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(5));
