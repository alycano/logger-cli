const chalk = require('chalk');

console.log(chalk.green.bold("=== Inicio del sistema ===\n"));

console.time(chalk.yellow('ProcesoPrincipal'));

function accesoUsuario(usuario) {
  console.count(chalk.blue(`Acceso de usuario ${usuario}`));
}

// Simulando accesos
accesoUsuario('Aly');
accesoUsuario('Andrea');
accesoUsuario('Aly');

// Advertencia
console.warn(chalk.keyword('orange')('Capacidad de usuarios alcanzando el límite'));

// Error
console.error(chalk.red.bold('Error: No se pudo conectar a la base de datos'));

// Mostrar usuarios como tabla
const usuarios = [
  { nombre: "Aly", rol: "Admin" },
  { nombre: "Andrea", rol: "User" }
];

console.log(chalk.cyan('\nLista de usuarios conectados:'));
console.table(usuarios);

console.timeEnd(chalk.yellow('ProcesoPrincipal'));

console.log(chalk.green.bold("\n=== Fin del sistema ==="));