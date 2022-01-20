/* 
#Desafio1
#Nome: Douglas Arruda Viana;
#Primeira etapa do Solfácil & Plug Camp;
*/

//usei os operadores ternários para fazer esta função
function obterSeculoEmQueSeEncontra(ano) {
    return Math.floor(ano/100) + ((ano%100 ? 1 : ano) % 10 ? 1 : 0);
 }
 
 console.log("seculo: " + obterSeculoEmQueSeEncontra(1705));
 console.log("seculo: " + obterSeculoEmQueSeEncontra(1900));
 console.log("seculo: " + obterSeculoEmQueSeEncontra(1601));
 console.log("seculo: " + obterSeculoEmQueSeEncontra(2000));
 console.log("seculo: " + obterSeculoEmQueSeEncontra(2022));
 console.log("seculo: " + obterSeculoEmQueSeEncontra(1000));
 console.log("seculo: " + obterSeculoEmQueSeEncontra(1001));