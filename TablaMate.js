// Definición de las variables de proposición
const p = [true, true, false, false];
const q = [true, false, true, false];

// a. Tabla de verdad para p, q, NOT p y NOT p AND q
console.log("Tabla de verdad para p, q, NOT p y NOT p AND q:");
console.log("p    q    NOT p    NOT p AND q");
for (let i = 0; i < p.length; i++) {
    const notP = !p[i];
    const notPAndQ = notP && q[i];
    console.log(`${p[i]}   ${q[i]}     ${notP}         ${notPAndQ}`);
}

// b. Tabla de verdad para p, q, NOT p, NOT q y NOT p AND NOT q
console.log("\nTabla de verdad para p, q, NOT p, NOT q y NOT p AND NOT q:");
console.log("p    q    NOT p    NOT q    NOT p AND NOT q");
for (let i = 0; i < p.length; i++) {
    const notP = !p[i];
    const notQ = !q[i];
    const notPAndNotQ = notP && notQ;
    console.log(`${p[i]}   ${q[i]}     ${notP}         ${notQ}         ${notPAndNotQ}`);
}
