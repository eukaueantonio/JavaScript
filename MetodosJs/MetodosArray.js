// ======================================================================
// .length => Retorna o tamanho do array
// ======================================================================

let frutas = [
    "Maça", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", 
    "Abacaxi", "Abacate", "Jabiticaba", "Romã", "Seriguela", 
    "Embu", "Caqui", "Uva verde", "Uva roxa"
];

console.log(frutas.length);

// ======================================================================
// .reverse() => Inverte a ordem dos elementos no array
// ======================================================================

let numeros = [70, 100, 120, 1000];

numeros.reverse();

console.log(numeros);

// ======================================================================
// Métodos para adicionar e remover elementos:
// .push() => Adiciona no final
// .unshift() => Adiciona no início
// .pop() => Remove do final
// .shift() => Remove do início
// .splice() => Remove um ou mais elementos a partir de um índice
// ======================================================================

let nomes = ["Valdemir", "Edson", "Anna", "Ana"];

nomes.push("Matheus");        // Adiciona no final
nomes.unshift("Sophia");      // Adiciona no início

console.log(nomes);

// ======================================================================
// .includes() => Verifica se um elemento existe no array (true/false)
// ======================================================================

let nomesAnimais = ["Julie", "Meg", "Mel", "Kiara", "Lola", "Sol"];

console.log(nomesAnimais.includes("Bob")); // false

// ======================================================================
// .filter() => Retorna os elementos que passam por uma condição
// ======================================================================

let valores = [30, 55, 90, 66];

let maiores = valores.filter(num => num > 50);

console.log(maiores); // [55, 90, 66]

// ======================================================================
// .map() => Retorna um novo array com os elementos transformados
// ======================================================================

let numeros2 = [2, 4, 6, 8, 10];

let dobro = numeros2.map(n => n * 2);

console.log(dobro); // [4, 8, 12, 16, 20]

// ======================================================================
// Usando .map() para extrair nomes de objetos
// ======================================================================

let alunos = [
    { nome: "Clara", nota: 8 },
    { nome: "Laura", nota: 10 },
    { nome: "Hiorhanna", nota: 9 }
];

let alunosNoGeral = alunos.map(aluno => aluno.nome);

console.log(alunosNoGeral); // ["Clara", "Laura", "Hiorhanna"]

// ======================================================================
// Criar mensagens personalizadas com .map()
// ======================================================================

let nomesMensagens = ["Caio", "Dani", "Ryan", "Vinícius"];

let mensagem = nomesMensagens.map(nome => `Olá, ${nome}`);

console.log(mensagem);

// ======================================================================
// Obter apenas a letra inicial dos nomes
// ======================================================================

let nomesIniciais = ["Isabelly", "Emilly", "Machado", "Guilherme"];

let letraInicial = nomesIniciais.map(nome => nome[0]);

console.log(letraInicial); // ["I", "E", "M", "G"]

// ======================================================================
// Extrair apenas o domínio de e-mails
// ======================================================================

let emails = ["Kaue@gmail.com", "Laura@hotmail.com", "Agatha@outlook.com"];

let apenasODominio = emails.map(email => email.split("@")[1]);

console.log(apenasODominio); // ["gmail.com", "hotmail.com", "outlook.com"]
