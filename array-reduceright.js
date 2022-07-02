let angka = [
  [2, 4],
  [6, 8],
  [10, 12],
  [14, 16],
  [18, 20],
];
const angkareduceright = angka.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);
console.log(angkareduceright);
