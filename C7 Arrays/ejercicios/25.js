function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  return numeros.reduce((contadorPares, numero) => {
    if (numero % 2 !== 0) return contadorPares;
    return contadorPares + 1;
  }, 0);
}

module.exports = contarParesConContinue;
