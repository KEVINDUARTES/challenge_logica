// SECUENCIA DE FIBONACCI
// 0,1,1,2,3,5,8,13,21,34,55,89,144, ...

function fibonacci(limit) {
  const arrayFibo = [0, 1];
  for (let i = 2; i <= limit; i++) {
    arrayFibo.push(arrayFibo[i - 1] + arrayFibo[i - 2]); //suamos los dos terminos el anterior con el anterior del anterior
  }
  return arrayFibo;
}

const testFib = fibonacci(30);
console.log(testFib);

const functions = {
  fibonacci,
};

module.exports = functions;
