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

	if(player1Move === player2Move)
	{
		document.getElementById("winner").innerHTML = "It's a draw!";

	}else if((player1Move === "rock" && player2Move === "scissors")
		||(player1Move === "paper" && player2Move === "rock")
		||(player1Move === "scissors" && player2Move === "paper")){
		document.getElementById("winner").innerHTML = "Player 1 wins!";

	}else{document.getElementById("winner").innerHTML = "Player 2 wins!";

	}

	
       
	//reset game
        player1Move = null;
	player2Move = null;
    }
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
