function getComputerChoice() {
    const rand = Math.random();

    if (rand < 1 / 3) {
        return "rock";
    }
    else if (rand < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose: Rock, Paper or Scissors!!");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return;
        }

        const humanWins =
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper");

        if (humanWins) {
            humanScore++;
            console.log(`You Win!  ${humanChoice} beats ${computerChoice}`);
        }
        else {
            computerScore++;
            console.log(`You Lose!  ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score:");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🏆 You win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("💀 You lose the game!");
    }
    else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();
