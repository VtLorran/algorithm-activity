const carros = [
  { nome: "Fusca", ano: 2008 },
  { nome: "BMW", ano: 2006 },
  { nome: "Corolla", ano: 2004 },
  { nome: "AudiRS", ano: 2025 },
  { nome: "McLaren", ano: 2024 },
];

const carroPos2010 = carros.filter((carro) => {
  if (carro.ano > 2010) console.log(carro.nome);
});
module.exports = {};