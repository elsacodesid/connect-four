document.addEventListener("DOMContentLoaded", () => {

    const squares = document.querySelectorAll(".grid div")
    const result = document.querySelector("#result")
    const displayCurrentPlayer = document.querySelector("#current-player")
    let currentPlayer = 1

    const winningArrays = [
        // Horizontal
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
        [42, 43, 44, 45], [43, 44, 45, 46], [44, 45, 46, 47], [45, 46, 47, 48],
        // Vertical
        [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [21, 28, 35, 42],
        [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [22, 29, 36, 43],
        [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [23, 30, 37, 44],
        [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [24, 31, 38, 45],
        [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [25, 32, 39, 46],
        [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [26, 33, 40, 47],
        [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], [27, 34, 41, 48],
        // Diagonal (down-right)
        [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27],
        [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
        [14, 22, 30, 38], [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41],
        [21, 29, 37, 45], [22, 30, 38, 46], [23, 31, 39, 47], [24, 32, 40, 48],
        // Diagonal (down-left)
        [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], [6, 12, 18, 24],
        [10, 16, 22, 28], [11, 17, 23, 29], [12, 18, 24, 30], [13, 19, 25, 31],
        [17, 23, 29, 35], [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38],
        [24, 30, 36, 42], [25, 31, 37, 43], [26, 32, 38, 44], [27, 33, 39, 45]
    ]
    
    
    function checkBoard() {

        let isWinnerFound = false

        for (let j = 0; j < winningArrays.length; j++) {
            const s1 = squares[winningArrays[j][0]]
            const s2 = squares[winningArrays[j][1]]
            const s3= squares[winningArrays[j][2]]
            const s4 = squares[winningArrays[j][3]]

            // Check player one wins
            if (
                s1.classList.contains("player-one") && 
                s2.classList.contains("player-one") &&
                s3.classList.contains("player-one") &&
                s4.classList.contains("player-one")
            ) {
                result.innerHTML = "Player one wins!" 
                isWinnerFound = true
            } 
            
            // Check player two wins
            if (
                s1.classList.contains("player-two") && 
                s2.classList.contains("player-two") &&
                s3.classList.contains("player-two") &&
                s4.classList.contains("player-two")
            ) {
                result.innerHTML = "Player two wins!" 
                isWinnerFound = true   
            }
        }
        if (isWinnerFound) {
            for (let y = 0; y < squares.length; y++) {
                squares[y].classList.remove("taken", "player-one", "player-two")
            }

            for (let z = 42; z <= 48; z++) {
                squares[z].classList.add("taken")
            }

            
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
         
        }
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
         // If square below your current square is taken,
         // you can go on top of it
         if (squares[i + 7].classList.contains("taken") && !squares[i].classList.contains("taken")) {
            if (currentPlayer === 1) {
                squares[i].classList.add("taken")
                squares[i].classList.add("player-one")
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else if (currentPlayer === 2) {
                squares[i].classList.add("taken")
                squares[i].classList.add("player-two")
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            } 
         } else alert("can\'t go here") 

         checkBoard()
         
        }
    }
})