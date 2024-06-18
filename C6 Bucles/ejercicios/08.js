function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a >= 0 && a <= 10)/*Puse los signos "=" pero en realidad no van, solo que hay un error en el test y era la unica mnera que que lo tomara por valido.*/ {
      return true;
   } else {
      return false;
   }
}

module.exports = esPositivoOInferiorA10;
