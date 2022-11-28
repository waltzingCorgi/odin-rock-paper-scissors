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

function game() {
    // Declare variables
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    // Game loop
    for (let i = 0; i < 5; i++) {

        // Declare loop variables
        let playerSelection, winner;

        // User entry
        do {
            playerSelection = prompt('Choice ("ROCK", "PAPER", or "SCISSORS")');
            if (playerSelection !== null) {
                playerSelection = playerSelection.toUpperCase();
            }
        } while ((playerSelection !== "ROCK") && (playerSelection !== "PAPER") && (playerSelection !== "SCISSORS") && playerSelection !== null);

        if (playerSelection === null) {
            console.log("Quitting.");
            return;
        }

        // Computer entry
        let computerSelection = getComputerChoice();

        // Determine winner
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
        console.log(getEndOfRoundMessage(playerSelection, computerSelection, winner));
    }

    // Ending messages
    console.log(`Player: ${playerWins}`);
    console.log(`Computer: ${computerWins}`);
    console.log(`Ties: ${ties}`);
}