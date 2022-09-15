//Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula o imc de pacientes,
//a função deverá receber os  seguintes parâmetros, peso e altura.
const prompt = require('prompt-sync')();
const calculoPA = require('./calculo');

console.log('Seja Bem Vinde'); 
const pes = prompt('Digite seu peso: ');
const peso = Number(pes);
const alt = prompt('Digite sua altura: ');
const altura = Number(alt);

console.log(`o seu resulta é: ${calculoPA(peso,altura)}`)