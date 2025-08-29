console.time("Tiempo de ejecución");

console.log("=== Inicio del sistema de registro de accesos ===");

console.count("Usuario: Aly");
console.count("Usuario: Darleny");
console.count("Usuario: Henry");
console.count("Usuario: Girleza");
console.count("Usuario: Deisy");

console.warn("Advertencia: intento de acceso sospechoso detectado.");
console.error("Error: fallo al registrar el acceso de un usuario.");

const registros = [
    { usuario: "Aly", hora: "08:00", estado: "Éxito" },
    { usuario: "Darleny", hora: "08:05", estado: "Éxito" },
    { usuario: "Girleza", hora: "08:10", estado: "Error" }
];
console.table(registros);

console.log("=== Fin del registro de accesos ===");

console.timeEnd("Tiempo de ejecución");