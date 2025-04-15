let objetos = [
    {produto: "panela de pressao", preço: 8},
    {produto: "colher", preço: 10},
    {produto: "mesa", preço: 9}
  ]
  
  let objetoNomes = objetos.map(objeto => objeto.produto);
  let objetoNotas = objetos.map(objeto => objeto.preço);
  
  console.log(objetoNomes);
  console.log(objetoNotas);
  