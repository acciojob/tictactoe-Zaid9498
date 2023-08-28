//your JS code here. If required.
const player1 = {
  name: '',
  symbol: 'X',
};

const player2 = {
  name: '',
  symbol: 'O',
};

let currentPlayer = player1;

const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer.symbol;
      checkWin();
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      message.textContent = `${currentPlayer.name}, you're up!`;
    }
  });
});

function checkWin() {
  // Implement the win checking logic here
  // Update the message div with the winning message
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  player1.name = document.getElementById('player-1').value;
  player2.name = document.getElementById('player-2').value;
  message.textContent = `${player1.name}, you're up!`;
});
