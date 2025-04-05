function sumEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 6
