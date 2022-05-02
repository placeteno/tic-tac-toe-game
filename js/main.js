const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  }
];

// === GENERAL VARIABLES ===
const backdrop = document.getElementById('backdrop');
const modal = document.getElementById('username');
const formElement = document.querySelector('form');
const errorMessage = document.getElementById('errors-message');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');

// === BUTTONS ===
const editPlayerOneBtn = document.getElementById("edit-player-one-btn");
const editPlayerTwoBtn = document.getElementById("edit-player-two-btn");
const cancelConfigBtn = document.getElementById('cancel-btn');
const confirmConfigBtn = document.getElementById('confirm-name-btn');
const startNewGameBtn = document.getElementById('new-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board div');

// === EVENT LISTENERS ===
editPlayerOneBtn.addEventListener('click', openConfigView);
editPlayerTwoBtn.addEventListener('click', openConfigView);

cancelConfigBtn.addEventListener('click', closeConfigView);
backdrop.addEventListener('click', closeConfigView);

formElement.addEventListener('submit', savePlayerConfig)

startNewGameBtn.addEventListener('click', startNewGame)


for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener('click', selectGameField);
}
