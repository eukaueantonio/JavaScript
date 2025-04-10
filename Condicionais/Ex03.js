//Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();

let numero = Number(prompt("Olá, digite seu número: "));

if (numero % 2 == 0) {
    console.log("Seu número é par");
}else{
    console.log("Seu número é ímpar");
}
