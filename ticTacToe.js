let currentPlayer = "X";
let gameState = [null, null, null, null, null, null, null, null, null];

const cells = document.querySelectorAll("td");
cells.forEach(cell => {
    cell.addEventListener("click", event => {
        const cellIndex = event.target.id;
        if (gameState[cellIndex] === null) {
            gameState[cellIndex] = currentPlayer;
            event.target.textContent = currentPlayer;
            checkForWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

const checkForWinner = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            alert(`Player ${gameState[a]} wins!`);
            return;
        }
    }

    if (!gameState.includes(null)) {
        alert("It's a tie!");
    }
};

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
    if(confirm("Are you sure you want to reset the game?")){
        currentPlayer = "X";
        gameState = [null, null, null, null, null, null, null, null, null];
        cells.forEach(cell => {
            cell.textContent = "";
        });
    }
});

cell.addEventListener("click", event => {
    const cellIndex = event.target.id;
    if (gameState[cellIndex] === null) {
        gameState[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkForWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
});
