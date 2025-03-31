let sum = 0;
for(let i = 1; i <= 5; i++) {
    let number = Math.floor(Math.random() * (20 - 1)) + 1;
    if(number % 3 === 0) {
        sum += number;
    }
}
console.log(sum);
