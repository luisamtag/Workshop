function esNacional(primerDigito) {
    return primerDigito === 'A';
}

// Ejemplo de uso
const primerDigitoPasaporte = 'A'; // Ejemplo de primer dígito del pasaporte

console.log(`¿El turista con pasaporte iniciado en "${primerDigitoPasaporte}" es nacional?`);
console.log(esNacional(primerDigitoPasaporte));