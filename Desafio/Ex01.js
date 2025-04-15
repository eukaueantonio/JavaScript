var prompt = require('prompt-sync')();
let lista = ['kaue'];

let nome;

do {
    nome = prompt("Digite seu nome (ou 'sair' para encerrar): ").trim();

    if (nome.toLowerCase() === "sair") {
        break;
    }
    const existe = lista.some(n => n.toLowerCase() === nome.toLowerCase());
    if (existe) {
        console.log("Nome já utilizado.");
    } else {
        lista.push(nome);
        console.log("Nome adicionado ao sistema.");
    }

} while (true);

console.log("Lista final:", lista);