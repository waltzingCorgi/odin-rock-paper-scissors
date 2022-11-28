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

function getEndOfRoundMessage(playerSelection, computerSelection, winner) {
    switch(winner) {
        case "Player":
            return `You win! ${playerSelection} beats ${computerSelection}.`
        case "Computer":
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        case "Tie":
            return `Tie! ${playerSelection} ties ${computerSelection}.`
        default:
            return "Error!";
    }
}

function playRound(playerSelection, computerSelection) {
    const winner = determineWinner(playerSelection, computerSelection);
    return getEndOfRoundMessage(playerSelection, computerSelection, winner);
   }
