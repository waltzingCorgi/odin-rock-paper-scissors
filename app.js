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