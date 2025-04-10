//Verificar o mês pelo número(Switch case)

var prompt = require('prompt-sync')();

let mes = Number(prompt("Digite um número do mês:"));

switch(mes){
    case 1:
        console.log("Esse mês é janeiro");
    break;
    case 2:
        console.log("Esse mês é fevereiro");
    break;
    case 3:
        console.log("Esse mês é março");
    break;
    case 4:
        console.log("Esse mês é abril");
    break;
    case 5:
        console.log("Esse mês é maio");
    break;
    case 6:
        console.log("Esse mês é junho");
    break;
    case 7:
        console.log("Esse mês é julho");
    break;
    case 8:
        console.log("Esse mês é agosto");
    break;
    case 9:
        console.log("Esse mês é setembro");
    break;
    case 10:
        console.log("Esse mês é outubro");
    break;
    case 11:
        console.log("Esse mês é setembro");
    break;
    case 12:
        console.log("Esse mês é dezembro");
    break;

    default:
        console.log("Dado inválido");
}