const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

const reset = document.querySelector('.reset')

const result = document.querySelector('.main-label')
const playerScore = document.querySelector('#playerScore')
const botScore = document.querySelector('#botScore')


function greenColor(a, b) {
  a.style.color = 'green'
  b.style.color = 'black'
}


reset.addEventListener('click', () => {
  result.innerText = ''
  playerScore.innerText = 0
  botScore.innerText = 0
  
  playerScore.style.color = 'black'
  botScore.style.color = 'black'
})


rock.addEventListener('click', () => {
  let botMove = Math.floor(Math.random() * 3);
  
  if (botMove == 0) {
    result.innerText = '✊✊'
  } else if (botMove == 1) {
    result.innerText = '✊🖐'
    botScore.innerText++
    greenColor(botScore, playerScore)
  } else {
    result.innerText = '✊✌'
    playerScore.innerText++
    greenColor(playerScore, botScore)
  }
})

paper.addEventListener('click', () => {
  let botMove = Math.floor(Math.random() * 3);
  
  if (botMove == 1) {
    result.innerText = '🖐✊'
    playerScore.innerText++
    greenColor(playerScore, botScore)
    greenColor(playerScore)
  } else if (botMove == 1) {
    result.innerText = '🖐🖐'
  } else {
    result.innerText = '🖐✌'
    botScore.innerText++
    greenColor(botScore, playerScore)
  }
})

scissors.addEventListener('click', () => {
  let botMove = Math.floor(Math.random() * 3);
  
  if (botMove == 2) {
    result.innerText = '✌✊'
    botScore.innerText++
    greenColor(botScore, playerScore)
  } else if (botMove == 1) {
    result.innerText = '✌🖐'
    playerScore.innerText++
    greenColor(playerScore, botScore)
    greenColor(playerScore)
  } else {
    result.innerText = '✌✌'
  }
})