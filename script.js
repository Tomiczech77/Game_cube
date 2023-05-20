// basic variables
var totalScore, roundScore, activePlayer, dice;

newStart();

function newStart(){
    totalScore = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // zeroing and removing the dice
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    // hide the dice
    document.querySelector(".diceImage").style.display = "none";
    
    // vintage text
    document.querySelector("#name-0").textContent = "Skóre 1. hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";

    // The first player will be active
    document.querySelector(".tolalScore0").classList.add("active");
    document.querySelector(".tolalScore1").classList.remove("active");
}


document.querySelector(".rollDice").addEventListener("click", function(){
    // random number 1-6
    var dice = Math.ceil(Math.random()*6);

    // display corect picture of dice
    var diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    console.log(diceElement.src = "img/" + dice + ".jpg");

    // loading numbers from dice
    if (dice != 1){
        roundScore = roundScore + dice;
        document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    roundScore = 0;
    
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".tolalScore0").classList.toggle("active");
    document.querySelector(".tolalScore1").classList.toggle("active");


}

document.querySelector(".holdScore").addEventListener("click", function(){
    // total score will be filled current score
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;


    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

    if(totalScore[activePlayer] >= 100){
        document.querySelector("#name-" + activePlayer).textContent = "Vítěz, Vítěz!";
        document.querySelector(".diceImage").style.display = "none";
    } else {
        nextPlayer();
    }
});

document.querySelector(".newGame").addEventListener("click", newStart);