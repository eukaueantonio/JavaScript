// ======================================================================
// Métodos de string: .toUpperCase() e .toLowerCase()
// ======================================================================

const nome = "Carlos Roque";

// Converte tudo para letras maiúsculas
console.log(nome.toUpperCase()); // "CARLOS ROQUE"

// Converte tudo para letras minúsculas
console.log(nome.toLowerCase()); // "carlos roque"

// ======================================================================
// .includes() => Verifica se uma string contém um determinado texto
// ======================================================================

const frase = "Hoje é um bom dia para estudar JavaScript.";

console.log(frase.includes("JavaScript")); // true
console.log(frase.includes("Phython"));    // false (obs: escrito errado, o certo é "Python")

// ======================================================================
// .replace() => Substitui parte da string por outra
// ======================================================================

const texto = "Olá, Maria!";
const novoTexto = texto.replace("Maria", "João");

console.log(novoTexto); // "Olá, João!"
