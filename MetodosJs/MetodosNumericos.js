// ======================================================================
// Arredondar número com casas decimais (.toFixed())
// ======================================================================

const numero = 123.456789;

// Mostra o número com 2 casas decimais
console.log(numero.toFixed(2)); // "123.46" (retorna como string)

// ======================================================================
// Conversão de string para número
// ======================================================================

const numUm = "123";
const numDois = "456.78";

// parseInt => Converte para inteiro
console.log(parseInt(numUm)); // 123

// parseFloat => Converte para número com casas decimais
console.log(parseFloat(numDois)); // 456.78
