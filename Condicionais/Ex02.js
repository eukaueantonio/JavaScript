//Verificar se o usuário pode tirar carteira de motorista

var prompt = require('prompt-sync')();

let idade = Number(prompt("Olá, digite sua idade: "));

if(idade => 18) {
    console.log("Você poderá tirar a carteira");
}else if(idade < 18){
    console.log("Você não poderá tirar a carteira");
}else{
    console.log("Essa informação não é válida");
}
