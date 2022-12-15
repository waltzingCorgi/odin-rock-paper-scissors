// Declare global variables
let games = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

// Declare HTML objects
const buttons = document.querySelectorAll("button");
currentWinnerDisplay = document.querySelector("div#winner");
playerWinsDisplay = document.querySelector("div#player-score");
computerWinsDisplay = document.querySelector("div#computer-score");
tieDisplay = document.querySelector("div#ties");

// Add event listeners
buttons.forEach(button => button.addEventListener("click", function() {game(button.id)}));
buttons.forEach(button => button.addEventListener("click", () => console.log("asdf")));

// Functions
function game(playerSelection) {
    if (games >= 5) return;

    // Declare variables
    let winner;

    // Player selection
    playerSelection = playerSelection.toUpperCase();

    // Computer entry
    let computerSelection = getComputerChoice();

    // Determine winner
    games++;
    winner = determineWinner(playerSelection, computerSelection);
    switch (winner) {
        case "Player":
            playerWins++;
            break;
        case "Computer":
            computerWins++;
            break;
        case "Tie":
            ties++;
    }

    // Ending messages
    if (games < 5) {
        currentWinnerDisplay.innerText = "Winner: " + winner;
    } else {
        currentWinnerDisplay.innerText = "Final Winner: " + winner;
    }
    playerWinsDisplay.innerText = "Player: " + playerWins;
    computerWinsDisplay.innerText = "Computer: " + computerWins;
    tieDisplay.innerText = "Ties: " + ties;

}

function getComputerChoice() {
    const choiceInt = Math.floor(Math.random() * 3);

    switch(choiceInt) {
        case 0: 
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function determineWinner(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === "ROCK" && computerSelection === "ROCK"):
            return "Tie";
        case (playerSelection === "ROCK" && computerSelection === "PAPER"):
            return "Computer";
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
            return "Player";
        case (playerSelection === "PAPER" && computerSelection === "ROCK"):
            return "Player";
        case (playerSelection === "PAPER" && computerSelection === "PAPER"):
            return "Tie";
        case (playerSelection === "PAPER" && computerSelection === "SCISSORS"):
            return "Computer";
        case (playerSelection === "SCISSORS" && computerSelection === "ROCK"):
            return "Tie";
        case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
            return "Player";
        case (playerSelection === "SCISSORS" && computerSelection === "SCISSORS"):
            return "Computer";
    }
}