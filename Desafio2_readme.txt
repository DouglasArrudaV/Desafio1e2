Para o Desafio02, foi criado uma consatnte partidas para receber o placar das 10 
partidas do campeonato, levando em consideração que o formato do placar é, 
por exemplo: "3:1". Onde este número não pode ter espaço entre eles, pois o código 
ainda não foi validado para receber espaços.

A variável pontuacaoTotal servirá de contator da pontuação.

Foi criada também 3 variáveis para as regras da partida, são elas: PONTUACAO_VITORIA, 
PONTUACAO_DERROTA, PONTUACAO_EMPATE.

Para a função calculaPontuacaoTotal, foi utilizada a estrutura de repetição for, 
e também receber o array de partidas como parâmetro. Além disso, foi utilizado 
o split para na medida que for percorrendo o array, for pegando cada string.

O método split() divide uma String em uma lista ordenada de substrings, 
coloca essas substrings em um array e retorna o array. 

Para a função calculaPontosDaPartida, foi utilizada para o cálculo de pontos da 
partida e armazenamento do placar, e que retornava o que estava decidido como 
regra da partida.

O index.html foi usado somente para abrir o browser para poder testar no console, 
já que neste programa não foi utilizado o terminal.