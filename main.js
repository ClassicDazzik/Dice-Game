// Variables
let roundScore = 0; 
let turn = 0;
let endscore = 100

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
    dicepic.src= 'img/' + dice + '.png';
    return dice;
}

// Rolls 2 dices.

function rolldice2() {
    var currentPlayer = players[turn];
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let doublescore = 0 // unused, will be used later to skip turn if player gets 3 doubles in a row
    roundScore = roundScore + d1 + d2;
    
    if(d1 == 1 && d2 == 1) {
        roundScore = roundScore + 21 // supposed to give 25 points, so its set to 21 due to also getting 4 points because of how doubles work.
        alert("Double 1's! 25 score.")
    }

    else if(d1 == 1 || d2 == 1) {
        changeTurn()
    }
    
    endscore = 1000
    
    if(d1 == d2){
        roundScore = roundScore + (d1 * 2)
        alert("doubles!");
    }

    document.getElementById("roundScore").innerHTML = roundScore;
    document.getElementById("d1").innerHTML = d1;
    document.getElementById("d2").innerHTML = d2;

    roll2_1.src= 'img/' + d1 + '.png';
    roll2_2.src= 'img/' + d2 + '.png';
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
