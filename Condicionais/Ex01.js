//Verificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();

let numero = Number(prompt("Olá, digite seu número:"));

if (numero > 0) {
    console.log("Seu número é positivo");
} else if (numero < 0){
    console.log("Seu número é negativo")
}else{
    console.log("Seu numero é zero")
}
