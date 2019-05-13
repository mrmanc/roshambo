var activePlayer = 0;
var player1Move = null;
var player2Move = null;

function changePlayer(){
    activePlayer = activePlayer % 2 + 1;
    document.getElementById("activePlayer").innerHTML =
        "It's player " + activePlayer + "'s turn!";
}

function checkForWinner(){
    if( player1Move && player2Move ){
        document.getElementById("winner").innerHTML = "Who wins!";
        resetGame();
    }
}

function resetGame(){
    player1Move = null;
    player2Move = null;
}

function play(moveName) {
    if( activePlayer === 1 ) {
        player1Move = moveName;
    } else {
        player2Move = moveName;
    }
    checkForWinner();
    changePlayer();
}
