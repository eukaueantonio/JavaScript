//Menu simples até o usuário sair(Use o do...While)
let prompt = require('prompt-sync')();
let num = 0;

do {
    console.log("|******************|");
    console.log("| 1 - Jogar        |");
    console.log("| 2 - Comer        |");
    console.log("| 3 - Sair         |");
    console.log("|                  |");
    console.log("|******************|");

 num = Number(prompt("Digite um numero :"))
  
} while (num !== 3);