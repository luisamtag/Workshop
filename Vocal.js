function esVocal(letra) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(letra.toLowerCase());
}

// Ejemplo de uso
const letra = 'A'; // Ejemplo de letra

console.log(`¿La letra "${letra}" es una vocal?`);
console.log(esVocal(letra));
