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

function playRound(playerSelection, computerSelection) {
    let winner;

    switch(true) {
        case (playerSelection === "ROCK" && computerSelection === "ROCK"):
            winner = "Tie";
            break;
        case (playerSelection === "ROCK" && computerSelection === "PAPER"):
            winner = "Computer";
            break;
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
            winner = "Player";
            break;
        case (playerSelection === "PAPER" && computerSelection === "ROCK"):
            winner = "Player";
            break;
        case (playerSelection === "PAPER" && computerSelection === "PAPER"):
            winner = "Tie";
            break;
        case (playerSelection === "PAPER" && computerSelection === "SCISSORS"):
            winner = "Computer";
            break;
        case (playerSelection === "SCISSORS" && computerSelection === "ROCK"):
            winner = "Tie";
            break;
        case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
            winner = "Player";
            break;
        case (playerSelection === "SCISSORS" && computerSelection === "SCISSORS"):
            winner = "Computer"
            break;
    }

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