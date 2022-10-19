// function average(numbers) {
//   let sum = 0;

//   numbers.forEach((number) => {
//     sum += number; // sum = sum + number
//   });

//   const average = sum / numbers.length;

//   return average;
// }

function average(numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0);

  const avg = sum / numbers.length;
  return avg;
}

console.log(average([10, 9, 6, 8, 9, 1, 5, 7])); // 6.875
console.log(average([2, 5, 7, 1, -2])); // 2.6
console.log(average([10, 10, 10, 10, 9])); // 9.8
console.log(average([25, 75])); // 50
