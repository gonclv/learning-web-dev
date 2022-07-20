//Simulação cadastro de colaborador
let anoAtual = 2022;
let nome = "Joãozinho";
let sobrenome = "Silva";
let anoDeNascimento = 1969;
let cpf = "000.000.000-0";
let anoEfetivacao = 2015;
let cargo = "Técnico Mecânico";
let nivelDoCargo = "Pleno";
let salarioBase = 4500;
let bonusCargo = 0.12;
//Variáveis em branco
let idade;
let tempoDeServico;
let salarioComposto;

idade = anoAtual - anoDeNascimento;
tempoDeServico = anoAtual - anoEfetivacao;
salarioComposto = salarioBase + (salarioBase * bonusCargo);

console.log(nome, sobrenome);
console.log(cpf);
console.log(cargo, nivelDoCargo);
console.log(idade);
console.log(tempoDeServico);
console.log(salarioComposto);
