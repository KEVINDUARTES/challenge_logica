for (i = 1; i <= 100; i++) {
  let result = '';
  if (i % 3 === 0) {
    result += 'Fizz';
  }

  if (i % 5 === 0) {
    result += 'Buzz';
  }
  console.log(result || i);
}

// Otra manera de hacerlo:

// for (i = 1; i <= 100; i++) {
//   let result = `${i % 3 ? '' : 'Fizz'}${i % 5 ? '' : 'Buzz'}`;
//   console.log(result || i);
// }
