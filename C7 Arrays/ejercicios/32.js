function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const cadenaProcesada = string.toLowerCase().replace(/\s/g, '');
  for (let i = 0; i < cadenaProcesada.length / 2; i++) {
    if (cadenaProcesada[i] !== cadenaProcesada[cadenaProcesada.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = esPalindromo;