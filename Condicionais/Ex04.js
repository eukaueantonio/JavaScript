//Verificar se uma senha digitada está correta

let numeroCorreto = 1234;

var prompt = require('prompt-sync')();

let numero = Number(prompt("Olá, digite seu número: "));

if (numero == numeroCorreto) {
    console.log("Sua senha está correta")
}else{
    console.log("Sua senha está incorreta")
}