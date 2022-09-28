var string = `Hola ¿cómo estás?,
  ¿cosas?,
  ¿Cómo estás?,
 ¿Eres desarrollador?,
  Yo también soy, desarrollador`;

var repetidos = [];
var noRepetidos = [];

for (var i = 0; i < string.toLowerCase().split(' ').length; i++) {
  var element = string.toLowerCase().split(' ')[i];

  var cant = string
    .toLowerCase()
    .split(' ')
    .reduce(function (n, val) {
      return n + (val === element);
    }, 0);

  if (cant > 1) {
    if (repetidos.indexOf(element) === -1) {
      repetidos.push(element);
    }
  } else {
    noRepetidos.push(element);
  }
}

console.log(repetidos);
