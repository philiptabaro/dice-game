var randomNumber1 = Math.floor(Math.random() * 7);
var randomNumber2 = Math.floor(Math.random() * 7);


var dicePics = ["images/dice1.png", "images/dice2.png", 
                "images/dice3.png", "images/dice4.png", 
                "images/dice5.png", "images/dice6.png"]

document.querySelector(".left-img").src = dicePics[randomNumber1];
document.querySelector(".right-img").src = dicePics[randomNumber2];

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"

} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
