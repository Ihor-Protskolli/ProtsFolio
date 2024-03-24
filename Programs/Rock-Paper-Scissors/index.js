// ROCK PAPER SCISSORS game

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!😶‍🌫️";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!😎" : "you lose☹️";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!😎" : "you lose☹️";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!😎" : "you lose☹️";
                break;     
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result; 
    
    resultDisplay.classList.remove("greenText", "redText", "whiteText");
    
    switch (result) {
        case "YOU WIN!😎":
            resultDisplay.classList.add('greenText');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
            
        case "you lose☹️":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        
        case "IT'S A TIE!😶‍🌫️":
            resultDisplay.classList.add("whiteText");
            break;
    }
}


