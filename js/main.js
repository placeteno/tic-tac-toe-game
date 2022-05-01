let editedPlayer = 0;

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

const backdrop = document.getElementById('backdrop');
const modal = document.getElementById('username');
const formElement = document.querySelector('form');
const errorMessage = document.getElementById('errors-message');

// === BUTTONS ===
const editPlayerOneBtn = document.getElementById("edit-player-one-btn");
const editPlayerTwoBtn = document.getElementById("edit-player-two-btn");
const cancelConfigBtn = document.getElementById('cancel-btn');
const confirmConfigBtn = document.getElementById('confirm-name-btn');


let playerOne = document.getElementById('playerone');
let playerTwo = document.getElementById('playertwo');


// === EVENT LISTENERS ===
editPlayerOneBtn.addEventListener('click', openConfigView);
editPlayerTwoBtn.addEventListener('click', openConfigView);

cancelConfigBtn.addEventListener('click', closeConfigView);
backdrop.addEventListener('click', closeConfigView);

formElement.addEventListener('submit', savePlayerConfig)


