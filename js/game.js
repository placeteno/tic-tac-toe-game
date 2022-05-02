function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Plase set custom player names for both players!');
    return
  }

  activePlayerName.innerText = players[activePlayer].name;
  gameArea.style.display = 'block';
  
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.innerText = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedColumn][selectedRow] > 0) {
    alert('Please, select an empty field!');
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add('disabled')

  
  gameData[selectedColumn][selectedRow] = activePlayer + 1;
  console.log(gameData);

  switchPlayer();
}