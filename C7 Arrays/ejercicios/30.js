function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const encontrado = numeros.find((elemento, index) => numeros.indexOf(elemento) !== index);
  return encontrado !== undefined ? encontrado : undefined;
}

module.exports = encontrarElementoRepetido;