// Menu simples até o usuário sair(Use o do...While)

var prompt = require('prompt-sync')();

let numero = 0;

do {   
    console.log("+================+")    
    console.log("|                |")    
    console.log("| 1) Musica      |")    
    console.log("| 2) Jogo        |")    
    console.log("| 3) Sair        |")    
    console.log("|                |")    
    console.log("+================+")    
    num = Number(prompt(""))

} while (numero !== 0);