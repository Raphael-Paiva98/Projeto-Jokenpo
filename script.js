const result = document.querySelector(".result");
const humanScore = document.querySelector(".human-score");
const machineScore = document.querySelector(".machine-score");

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = [Math.floor(Math.random() * 3)]
  return choices[randomNumber]
}

const playTheGame = (human, machine) => {
  console.log('Humano' + human + "Maquina:" + machine)

  if (human === machine) {
    result.innerHTML = "Empatou"
  } else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
  ) {
    humanScoreNumber ++;
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "Você ganhou"
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você perdeu"
  }
}

/*
# Jogo Jokenpo

Um simples jogo de pedra, papel e tesoura desenvolvido com HTML, CSS e JavaScript.

## Funcionalidades

- Jogabilidade clássica de pedra, papel e tesoura.
- Interface gráfica atraente e responsiva.

## Como jogar

1. Abra o arquivo `index.html` no seu navegador.
2. Escolha entre pedra, papel ou tesoura clicando no botão correspondente.
3. O computador fará uma escolha aleatória.
4. Descubra quem ganhou!

*/