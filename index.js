var randomNumber1 = Math.round(Math.random()*6);
var randomDice = "dice" +randomNumber1+ ".png"
var randomImageSource = "images/" +randomDice;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);



// sceond randon number

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImg2 = "images/dice" +randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if(randomImageSource > randomImg2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}else if(randomImageSource === randomImg2){
    document.querySelector("h1").innerHTML = "DRAW";
}
else{
    document.querySelector("h1").innerHTML = "player 2 wins";
}