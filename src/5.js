(() => {
  const getRandomInt = () => Math.floor(Math.random() * 10) + 1;
  const getRandomBoolean = () => Boolean(getRandomInt());
  const getRandomArray = () => Array(getRandomInt()).fill().map((_, i) => `Item ${i}`);
  return { getRandomInt, getRandomBoolean, getRandomArray };
})();
