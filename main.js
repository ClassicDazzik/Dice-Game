// Variables
let roundScore = 0; 
let turn = 0;
let endscore = 20

let players = [
    {
        name: "Player1",
        score: 0
    },
    {
        name: "Player2",
        score: 0
    }
];

// Rolls the dice.

function rolldice() {
    var currentPlayer = players[turn];
    let dice = Math.floor(Math.random() * 6) + 1;
    roundScore = roundScore + dice;
    if(dice == 1) {
        changeTurn()
    }
    document.getElementById("roundScore").innerHTML = roundScore;
    document.getElementById("scoretest").innerHTML = dice;
    return dice;
}

// Changes turn to another player and resets the round score.

function changeTurn() {
    turn++;
    if(turn == players.length) {
       turn = 0;}
    roundScore = 0;
    document.getElementById("playerturn").innerHTML = players[turn].name;
}

// Adds a score to a player, then changes the turn.

function calcScore() {
    players[turn].score += roundScore;
    document.getElementById("p1score").innerHTML = players[0].score;
    document.getElementById("p2score").innerHTML = players[1].score;
    endGame();
    changeTurn();
}

// Ends the game by reloading the page when either player's score goes to 100.

function endGame() {
    if(players[turn].score > endscore) {
        alert(players[turn].name + " won!");
        console.log("plr win");
    }
}