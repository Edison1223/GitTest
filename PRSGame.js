const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resultMessageEl = document.getElementById("result-message");
const resetBtn = document.getElementById("reset-btn");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceEl.textContent = `You chose: ${playerChoice}`;
    computerChoiceEl.textContent = `Computer chose: ${computerChoice}`;

    const result = getResult(playerChoice, computerChoice);
    displayResult(result);
  });
});

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return "win";
  } else {
    computerScore++;
    return "lose";
  }
}

function displayResult(result) {
  if (result === "win") {
    resultMessageEl.textContent = "🎉 You win this round!";
    resultMessageEl.style.color = "#4CAF50";
  } else if (result === "lose") {
    resultMessageEl.textContent = "😢 You lose this round.";
    resultMessageEl.style.color = "#f44336";
  } else {
    resultMessageEl.textContent = "🤝 It's a draw!";
    resultMessageEl.style.color = "#333";
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  playerChoiceEl.textContent = "You chose: —";
  computerChoiceEl.textContent = "Computer chose: —";
  resultMessageEl.textContent = "Make your move!";
  resultMessageEl.style.color = "#333";
});
