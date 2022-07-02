let angka = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(angka.reduce(reducer));
console.log(angka.reduce(reducer, 20));
