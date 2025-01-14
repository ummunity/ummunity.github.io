const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (gameState[index] !== '') return;

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
