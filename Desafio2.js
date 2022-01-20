/* 
#Desafio2
#Nome: Douglas Arruda Viana;
#Primeira etapa do Solfácil & Plug Camp;
*/

// como há 10 partidas no campeonato, então listei as 10 partidas com os respectivos resultados dentro do array 
let partidas = ["3:1","2:2","0:1","1:2","1:1","2:1","0:0","0:2","3:0","4:1"]; 

// coloquei esta variavel para servir como contador da pontuação
let pontuacaoTotal = 0;

// regras da partida
const PONTUACAO_VITORIA = 3;
const PONTUACAO_DERROTA = 0;
const PONTUACAO_EMPATE = 1;

// estrutura de repetição.
// foi utilizado o split para pegar cada string ao processar todo o arry
function calculaPontuacaoTotal(partidas) {
    for(let i = 0; i < partidas.length; i ++) {
        const placar = partidas[i].split(":");
        const placarEquipe = placar[0];
        const placarAdversario = placar[1];
        const pontuacaoPartida = calculaPontosDaPartida(placarEquipe, placarAdversario);
        pontuacaoTotal = pontuacaoTotal + pontuacaoPartida  
    };
};

// estrutura de repetição para o cálculo de pontos da partida e armazenamento de pontos no placar
function calculaPontosDaPartida(placarEquipe, placarAdversario) {
    if (placarEquipe > placarAdversario) {
        return PONTUACAO_VITORIA;
    } else if (placarEquipe < placarAdversario) {
        return PONTUACAO_DERROTA;
    } else {
        return PONTUACAO_EMPATE;
    };
};

calculaPontuacaoTotal(partidas);

console.log("O placar da equipe é " + pontuacaoTotal);