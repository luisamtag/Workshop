function esSueldoInferiorYAntiguedadSuperior(sueldo, antiguedad) {
    return sueldo < 2000 && antiguedad >= 10;
}

function esSueldoInferiorOAntiguedadInferior(sueldo, antiguedad) {
    return sueldo < 2000 || antiguedad < 10;
}

function esSueldoMayorOIgual(sueldo) {
    return sueldo >= 2000;
}

// Ejemplo de uso
const sueldo = 1800; // Ejemplo de sueldo
const antiguedad = 8; // Ejemplo de antigüedad

console.log("¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?");
console.log(esSueldoInferiorYAntiguedadSuperior(sueldo, antiguedad));

console.log("¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?");
console.log(esSueldoInferiorOAntiguedadInferior(sueldo, antiguedad));

console.log("¿El sueldo es mayor o igual a $2000 US?");
console.log(esSueldoMayorOIgual(sueldo));