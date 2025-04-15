// ======================================================================
// Trabalhando com datas e horas em JavaScript
// ======================================================================

// Cria um objeto com a data e hora atual
let agora = new Date();

// Converte para o formato local do Brasil (fuso horário de Brasília)
let horaBrasilia = agora.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
console.log("Data e hora em Brasília:", horaBrasilia);

// ======================================================================
// Extraindo partes específicas da data
// ======================================================================

// Ano completo (ex: 2025)
console.log("Ano:", agora.getFullYear());

// Mês (0 a 11, sendo 0 = Janeiro e 11 = Dezembro)
console.log("Mês (0 = Jan):", agora.getMonth());

// Dia da semana (0 = Domingo, 6 = Sábado)
console.log("Dia da semana (0 = Domingo):", agora.getDay());
