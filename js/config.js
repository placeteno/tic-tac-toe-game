function openConfigView() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
  errorMessage.textContent = '';
}

function closeConfigView() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
}

function savePlayerConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target)
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorMessage.textContent = 'Please, enter a valid name';
    return;
  }

  
}