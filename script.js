let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
        return;
    }

    const humanWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
        humanScore++;
        resultsDiv.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        resultsDiv.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        winnerDiv.textContent = "🏆 You win the game!";
        winnerDiv.className = "winner";
        resetBtn.style.display = "inline-block";

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

    else if (computerScore === 5) {
        winnerDiv.textContent = "💀 Computer wins the game!";
        winnerDiv.className = "loser";
        resetBtn.style.display = "inline-block";

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    resultsDiv.textContent = "";
    scoreDiv.textContent = `Human: 0 | Computer: 0`;
    winnerDiv.textContent = "";
    winnerDiv.className = "";

    resetBtn.style.display = "none";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset");

scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

resetBtn.addEventListener("click", resetGame);


