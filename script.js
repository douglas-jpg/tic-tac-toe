const restart = document.querySelector(".restart");
const houses = document.querySelectorAll(".houses");
const player = document.querySelector(".player");
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let board = [];
let currentPlayer = "X";
let condition;

// check and draw X or O on the house
const checkHouse = (btn) => {
    if(btn.innerText === ''){
        btn.classList.add(currentPlayer);
        btn.innerText = currentPlayer;
        board.push([currentPlayer, btn.value]);
        return true;
    }
    return false
}

const changerPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    player.innerText = `Vez do jogador: ${currentPlayer}`;
}

// select all player moves
const allMoves = () => {
    array = board
    .filter((valor) => valor[0] == currentPlayer)
    .map((valor) => parseInt(valor[1]));

    array = array.sort();

    return array
}

const checkWinner = () => {
    let playerMoves = allMoves();

    for (moves of win){
        if(moves.every((item) => playerMoves.includes(item))){
            return 'win'
        }}

    if(board.length === 9){
return 'tie'
    }
}


const restartGame = () => {
    houses.forEach(house => {
        house.innerHTML = ''
        house.classList.remove('X');
        house.classList.remove('O');
        board = []
    })
}

// start the game
const game = (btn) => {
    if(checkHouse(btn)){
        
        condition = checkWinner()

        setTimeout(() => {
            if(condition === 'win'){
            alert(`O player ${currentPlayer} ganhou`)
                restartGame()
                
            } else if(condition === 'tie'){
                alert("Empate ninguem venceu")
                restartGame()
            }        
            changerPlayer();
        }, 100);    
    }
}


houses.forEach(house => {
    house.addEventListener('click', () => {
        game(house)
    })
});

restart.addEventListener('click', restartGame);