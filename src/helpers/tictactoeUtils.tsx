export const checkForWin = (boardState: string[]) => {
    const winningRows = [[0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];

    // create an object to count the number of X's and O's in each row
    const rowCounts = {
        X: Array(8).fill(0),
        O: Array(8).fill(0)
    };

    // iterate over each cell in the board and update the row counts
    for (let i = 0; i < boardState.length; i++) {
        if (boardState[i] === "X") {
            rowCounts.X[Math.floor(i / 3)]++;
            rowCounts.X[3 + (i % 3)]++;
            if (i % 4 === 0) rowCounts.X[6]++;
            if (i === 2 || i === 4 || i === 6) rowCounts.X[7]++;
        } else if (boardState[i] === "O") {
            rowCounts.O[Math.floor(i / 3)]++;
            rowCounts.O[3 + (i % 3)]++;
            if (i % 4 === 0) rowCounts.O[6]++;
            if (i === 2 || i === 4 || i === 6) rowCounts.O[7]++;
        }
    }

    // check if any row has three of the same symbol
    for (let i = 0; i < winningRows.length; i++) {
        const [a, b, c] = winningRows[i];
        if (rowCounts.X[i] === 3) return "X";
        if (rowCounts.O[i] === 3) return "O";
    }

    // if no win condition is found, return null
    return null;
}