//Verificar senha com tentativa até acertar(Use o While)

let numeroCorreto = 1234;

var prompt = require('prompt-sync')();

let numero = Number(prompt("Olá, digite seu número: "));

while(numero !== numeroCorreto){
    numero = Number(prompt("Digite a senha: "));
}

console.log("Sua senha está correta");