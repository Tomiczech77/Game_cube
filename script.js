// basic variables
var totalScore, roundScore, activePlayer, dice;

totalScore = [0, 0];
roundScore = 0;
activePlayer = 0;

// zeroing and removing the dice
document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;

document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

document.querySelector(".diceImage").style.display = "none";

document.querySelector(".rollDice").addEventListener("click", function(){
    // random number 1-6
    var dice = Math.ceil(Math.random()*6);

    // display corect picture of dice
    var diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    console.log(diceElement.src = "img/" + dice + ".jpg");
});