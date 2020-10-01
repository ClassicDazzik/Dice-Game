// Muuttujat
let roundScore = 0; // jemmataan heittokierroksen pisteet
let turn = 0;

const players = [
    {
        name: "Player1",
        points: 0
    },
    {
        name: "Player2",
        points: 0
    }
];

function rolldice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    roundScore = roundScore + dice;
    document.getElementById("scoretest").innerHTML = dice;
    return dice;
}

console.log(rolldice)
