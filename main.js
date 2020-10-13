// Variables
let roundScore = 0; 
let turn = 0;
var plr1score = 0;
var plr2score = 0;

let players = [
    {
        name: "Player1",
    },
    {
        name: "Player2",
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
    if(turn == 0) {
        plr1score = plr1score + roundScore;
    }
    if(turn == 1) {
        plr2score = plr2score + roundScore;
    }
    changeTurn();
    document.getElementById("p1score").innerHTML = plr1score;
    document.getElementById("p2score").innerHTML = plr2score;
}

// Ends the game by reloading the page when either players plrscore goes to 100.

function endGame() {
    if(plr1score || plr2score == 100) {
    location.reload();
    }
}