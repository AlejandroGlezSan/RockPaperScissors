//Rock, Paper, Scissors game
//By Alejandro González Santana
//22.08.2021 09:52

var playersChoice;
var PlayerPoints = 0;
var ComputerPoints = 0;
var ElementComputer = document.getElementById("ComputerImage");
var PlayerElement = document.getElementById("PlayerImage");
var CurrentElement = document.getElementById("Main-Menu-Buttons");

var LastElement;

var AnotherElement;

//Define the possible elements that the computer can choose from and store them in an array

const elements = ['rock', 'paper' , 'scissors'];

function playersChoicePaper() {
    PlayerElement.src='images/paperWhite.png';
    ElementAppearAndMove(PlayerElement);
    var choice = "paper";
    decideWinner(choice);
}

function playersChoiceRock() {
    PlayerElement.src='images/rock.png';
    ElementAppearAndMove(PlayerElement);
    var choice = "rock";
    decideWinner(choice);
}

function playersChoiceScissors() {
    PlayerElement.src='images/scissors.png';
    ElementAppearAndMove(PlayerElement);
    var choice = "scissors";
    decideWinner(choice);
}

//Main Menu
//Store the current div element in a variable for the Return() function

function SelectGameMode() {
    LastElement = CurrentElement;
    CurrentElement.style.display="none";
    CurrentElement = document.getElementById("Select-Game-Mode");
    CurrentElement.style.display="block";
}

function StartPlay() {
    PlayerPoints = 0;
    ComputerPoints = 0;
    document.getElementById("PlayerPoints").innerHTML=PlayerPoints;
    document.getElementById("ComputerPoints").innerHTML=ComputerPoints;
    ElementComputer.src="images/transp-bg.png";
    PlayerElement.src="images/transp-bg.png";
    document.getElementById("RightOrWrongPlayer").src="images/transp-bg.png";
    document.getElementById("RightOrWrongComputer").src="images/transp-bg.png";
    LastElement = CurrentElement;
    CurrentElement.style.display="none";
    CurrentElement = document.getElementById("Game-Space");
    CurrentElement.style.display="block";
    document.getElementById("TitleRPS").style.display="none";
}

function HowToPlay() {
    LastElement = CurrentElement;
    CurrentElement.style.display="none";
    CurrentElement = document.getElementById("Instructions");
    CurrentElement.style.display="block";
}

function Credits() {
    LastElement = CurrentElement;
    CurrentElement.style.display="none";
    CurrentElement = document.getElementById("Credits-display");
    CurrentElement.style.display="block";
}

//Store the latest div element in a variable for the Return() function

function Return() {
    document.getElementById("TitleRPS").style.display="block";
    document.getElementById("PlayAgain").style.display="none";
    CurrentElement.style.display="none";
    LastElement.style.display="block";
    AnotherElement = LastElement;
    LastElement = CurrentElement;
    CurrentElement = AnotherElement;
}

function Customize() {
    document.getElementById("NumberRounds").value="1";
    LastElement = CurrentElement;
    CurrentElement.style.display="none";
    CurrentElement = document.getElementById("Customize-display");
    CurrentElement.style.display="block";
}

function PlayAgain() {
    document.getElementById("PlayAgain").style.display="none";
    document.getElementById("Flexbox-Container3").style.display="none";
    document.getElementById("Flexbox-Container2").style.display="flex";
    StartPlay();
}

//Appear animation after element selection

function ElementAppearAndMove(ImageToAnimate) {
    ImageToAnimate.animate([
        { // from
          opacity: 0,
          top: "5vw",
        },
        { // to
          opacity: 1,
          top: "0vw",
        }
      ], 1000);
}

function ElementAppear(ImageToAnimate) {
    ImageToAnimate.animate([
        { // from
          opacity: 0,
        },
        { // to
          opacity: 1,
        }
      ], 1000);
}

//Functions to display borders when moving the mouse over the elements

function DisplayBorder(elem) {
    elem.style.border="0.3vw solid yellow";
}

function DontDisplayBorder(elem) {
    elem.style.border="0.3vw solid dodgerblue";
}

//Functions to establish the number of points to win.

function ThreePointsToWin() {
    WhatPointsToWin = 3;
    StartPlay();
}

function SixPointsToWin() {
    WhatPointsToWin = 6;
    StartPlay();
}

function NinePointsToWin() {
    WhatPointsToWin = 9;
    StartPlay();
}

function CustomPointsToWin() {
    var CustomPoints = document.getElementById("NumberRounds").value;
    WhatPointsToWin = CustomPoints;
    StartPlay();
}

//Function to check if anyone has earned the required number of points to win

function CheckWhoWon() {
    if (PlayerPoints == WhatPointsToWin) {
        document.getElementById("PlayAgain").style.display="inline-block";
        document.getElementById("Flexbox-Container2").style.display="none";
        document.getElementById("Flexbox-Container3").style.display="flex";
        document.getElementById("WinnerInfo").innerHTML="Player wins the game!";
        LastElement = document.getElementById("Main-Menu-Buttons");
    } else if (ComputerPoints == WhatPointsToWin) {
        document.getElementById("PlayAgain").style.display="inline-block";
        document.getElementById("Flexbox-Container2").style.display="none";
        document.getElementById("Flexbox-Container3").style.display="flex";
        document.getElementById("WinnerInfo").innerHTML="Computer wins the game...";
        LastElement = document.getElementById("Main-Menu-Buttons");
    }
}
    
//Who wins?

function decideWinner(winner) {
    var ElementComputer = document.getElementById("ComputerImage");
    switch(winner) {
        case 'rock':
            //Generate a number between 0 and 2 and assign it to a word in the array "elements".
            var ComputerChoice = Math.floor(Math.random() * 3);
            ComputerChoice = elements[ComputerChoice];
            //depending on the word it will choose from the 3 different images
            if (ComputerChoice == 'scissors') { 
                ++PlayerPoints;
                document.getElementById("PlayerPoints").innerHTML=PlayerPoints;
                document.getElementById("ComputerPoints").innerHTML=ComputerPoints;
                ElementComputer.src="images/scissors.png";
                ElementAppearAndMove(ElementComputer);
                var RightOrWrongImagePlayer = document.getElementById("RightOrWrongPlayer");
                RightOrWrongImagePlayer.src="images/green-tick.png";
                ElementAppear(RightOrWrongImagePlayer);
                var RightOrWrongImageComputer = document.getElementById("RightOrWrongComputer");
                RightOrWrongImageComputer.src="images/red-cross.png";
                ElementAppear(RightOrWrongImageComputer);
            //Check if anyone has earned the required number of points to win the game
                CheckWhoWon();
            } else if (ComputerChoice == 'rock') {
                document.getElementById("RightOrWrongPlayer").src="images/transp-bg.png";
                document.getElementById("RightOrWrongComputer").src="images/transp-bg.png";
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/rock.png";
                ElementAppearAndMove(ElementComputer);
                CheckWhoWon();
            } else {
                ++ComputerPoints;
                document.getElementById("PlayerPoints").innerHTML=PlayerPoints;
                document.getElementById("ComputerPoints").innerHTML=ComputerPoints;
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/paperWhite.png";
                ElementAppearAndMove(ElementComputer);
                var RightOrWrongImageComputer = document.getElementById("RightOrWrongComputer");
                RightOrWrongImageComputer.src="images/green-tick.png";
                ElementAppear(RightOrWrongImageComputer);
                var RightOrWrongImagePlayer = document.getElementById("RightOrWrongPlayer");
                RightOrWrongImagePlayer.src="images/red-cross.png";
                ElementAppear(RightOrWrongImagePlayer);
                CheckWhoWon();
            }
            break
        case 'paper':
            var ComputerChoice = Math.floor(Math.random() * 3);
            ComputerChoice = elements[ComputerChoice];
            if (ComputerChoice == 'scissors') {
                ++ComputerPoints;
                document.getElementById("PlayerPoints").innerHTML=PlayerPoints;
                document.getElementById("ComputerPoints").innerHTML=ComputerPoints;
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/scissors.png";
                ElementAppearAndMove(ElementComputer);
                var RightOrWrongImageComputer = document.getElementById("RightOrWrongComputer");
                RightOrWrongImageComputer.src="images/green-tick.png";
                ElementAppear(RightOrWrongImageComputer);
                var RightOrWrongImagePlayer = document.getElementById("RightOrWrongPlayer");
                RightOrWrongImagePlayer.src="images/red-cross.png";
                ElementAppear(RightOrWrongImagePlayer);
                CheckWhoWon();
            } else if (ComputerChoice == 'paper') {
                document.getElementById("RightOrWrongPlayer").src="images/transp-bg.png";
                document.getElementById("RightOrWrongComputer").src="images/transp-bg.png";
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/paperWhite.png";
                ElementAppearAndMove(ElementComputer);
                CheckWhoWon();
            } else {
                ++PlayerPoints;
                document.getElementById("PlayerPoints").innerHTML=PlayerPoints;
                document.getElementById("ComputerPoints").innerHTML=ComputerPoints;
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/rock.png";
                ElementAppearAndMove(ElementComputer);
                var RightOrWrongImagePlayer = document.getElementById("RightOrWrongPlayer");
                RightOrWrongImagePlayer.src="images/green-tick.png";
                ElementAppear(RightOrWrongImagePlayer);
                var RightOrWrongImageComputer = document.getElementById("RightOrWrongComputer");
                RightOrWrongImageComputer.src="images/red-cross.png";
                ElementAppear(RightOrWrongImageComputer);
                CheckWhoWon();
            }
            break
    
        case 'scissors':
            var ComputerChoice = Math.floor(Math.random() * 3);
            ComputerChoice = elements[ComputerChoice];
            if (ComputerChoice == 'paper') {
                PlayerPoints++;
                document.getElementById("PlayerPoints").innerHTML=PlayerPoints;
                document.getElementById("ComputerPoints").innerHTML=ComputerPoints;
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/paperWhite.png";
                ElementAppearAndMove(ElementComputer);
                var RightOrWrongImagePlayer = document.getElementById("RightOrWrongPlayer");
                RightOrWrongImagePlayer.src="images/green-tick.png";
                ElementAppear(RightOrWrongImagePlayer);
                var RightOrWrongImageComputer = document.getElementById("RightOrWrongComputer");
                RightOrWrongImageComputer.src="images/red-cross.png";
                ElementAppear(RightOrWrongImageComputer);
                CheckWhoWon();
            } else if (ComputerChoice == 'scissors') {
                document.getElementById("RightOrWrongPlayer").src="images/transp-bg.png";
                document.getElementById("RightOrWrongComputer").src="images/transp-bg.png";
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/scissors.png";
                ElementAppearAndMove(ElementComputer);
                CheckWhoWon();
            } else {
                ComputerPoints++;
                document.getElementById("PlayerPoints").innerHTML=PlayerPoints;
                document.getElementById("ComputerPoints").innerHTML=ComputerPoints;
                var ElementComputer = document.getElementById("ComputerImage");
                ElementComputer.src="images/rock.png";
                ElementAppearAndMove(ElementComputer);
                var RightOrWrongImageComputer = document.getElementById("RightOrWrongComputer");
                RightOrWrongImageComputer.src="images/green-tick.png";
                ElementAppear(RightOrWrongImageComputer);
                var RightOrWrongImagePlayer = document.getElementById("RightOrWrongPlayer");
                RightOrWrongImagePlayer.src="images/red-cross.png";
                ElementAppear(RightOrWrongImagePlayer);
                CheckWhoWon();
            }
            break
    }
}
