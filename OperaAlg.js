// Definición de las variables
const a = 4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 2 * w;

// a. Operación: a / (b * c)
const resultadoA = a / (b * c);

// b. Operación: a^2 + b^2
const resultadoB = Math.pow(a, 2) + Math.pow(b, 2);

// c. Operación: (x + y) / (u + w / a)
const resultadoC = (x + y) / (u + w / a);

// d. Operación: x / y * (z + w)
const resultadoD = x / y * (z + w);

// Mostrar resultados en consola
console.log("Resultado de a:");
console.log(resultadoA);

console.log("Resultado de b:");
console.log(resultadoB);

console.log("Resultado de c:");
console.log(resultadoC);

console.log("Resultado de d:");
console.log(resultadoD);
