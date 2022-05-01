function openConfigView(event) {
  editedPlayer = event.target.dataset.playerid;

  modal.style.display = 'block';
  backdrop.style.display = 'block';
  errorMessage.textContent = '';
}

function closeConfigView() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target)
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorMessage.textContent = 'Please, enter a valid name!';
    return;
  }

  const updatePlayerName = document.getElementById('player-' + editedPlayer);
  updatePlayerName.textContent = enteredPlayerName;

  if (editedPlayer == 'one') {
    players[0].name = enteredPlayerName;
  } else {
    players[1].name = enteredPlayerName;
  };

  closeConfigView();
}