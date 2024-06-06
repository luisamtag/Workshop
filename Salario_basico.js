function calcularSalarioBasicoMensual(salarioPorHora, horasTrabajadas) {
    const salarioBasicoMensual = salarioPorHora * horasTrabajadas;
    return salarioBasicoMensual;
}

function determinarSubsidioTransporte(salarioBasicoMensual) {
    const limiteSubsidioTransporte = 700000;
    return salarioBasicoMensual <= limiteSubsidioTransporte;
}

function mostrarInformacionEmpleado(nombreEmpleado, salarioBasicoMensual, recibeSubsidioTransporte) {
    console.log("Nombre del empleado:", nombreEmpleado);
    console.log("Salario básico mensual:", salarioBasicoMensual);
    console.log("Recibe subsidio de transporte:", recibeSubsidioTransporte ? "Sí" : "No");
}

// Ejemplo de uso
const nombreEmpleado = "Juan";
const salarioPorHora = 10000; // Ejemplo de salario por hora
const horasTrabajadas = 80; // Ejemplo de horas trabajadas en un mes

const salarioBasicoMensual = calcularSalarioBasicoMensual(salarioPorHora, horasTrabajadas);
const recibeSubsidioTransporte = determinarSubsidioTransporte(salarioBasicoMensual);

mostrarInformacionEmpleado(nombreEmpleado, salarioBasicoMensual, recibeSubsidioTransporte);