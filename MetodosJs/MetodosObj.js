// ======================================================================
// Trabalhando com objetos: Object.keys() e Object.values()
// ======================================================================

const alunos = {
    nome: "Kayky",
    idade: 17,
    cpf: "000.000.000-00"
};

// Object.keys() => Retorna um array com as chaves (propriedades) do objeto
console.log(Object.keys(alunos)); // ["nome", "idade", "cpf"]

// Object.values() => Retorna um array com os valores das propriedades
console.log(Object.values(alunos)); // ["Kayky", 17, "000.000.000-00"]
