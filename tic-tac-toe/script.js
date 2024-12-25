const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }
    return null;
}

function handleClick(e) {
    if (e.target.textContent === '') {
        e.target.textContent = currentPlayer;
        const winner = checkWinner();
        if (winner) {
            setTimeout(() => alert(`${winner} wins!`), 100);
            resetGame();
        } else if (Array.from(cells).every(cell => cell.textContent)) {
            setTimeout(() => alert(`It's a draw!`), 100);
            resetGame();
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
