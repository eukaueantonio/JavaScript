//Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();

let numero = Number(prompt("Olá, digite sua média: "));

if (numero >= 5) {
    console.log("Você foi aprovado");
}else if(numero < 5){
    console.log("Você foi reprovado");
}