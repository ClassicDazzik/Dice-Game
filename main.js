function rolldice() {
    document.getElementById("scoretest").innerHTML =
    Math.floor(Math.random() * 6) + 1;
}

console.log(rolldice)
