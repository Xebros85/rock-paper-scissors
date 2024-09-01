// Global Variables

const choices = ["Rock", "Paper", "Scissors"];
const rockButton = document.querySelector("#choiceRock");
const paperButton = document.querySelector("#choicePaper");
const scissorsButton = document.querySelector("#choiceScissors");
const resultsDiv = document.querySelector("#results");
const playerScoreSpan = document.querySelector("#player-score");
const compScoreSpan = document.querySelector("#comp-score");
let playerScore = 0;
let compScore = 0;
let userChoice;
let computerChoice;

// function will get the computer's choice. Rock paper or scissors

function getComputerChoice() {
    let compChoiceIndex = Math.floor(Math.random() * choices.length);    
    return choices[compChoiceIndex];  
}

function empty(element) {
    element.replaceChildren();
}

const displayScore = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Your Score: ${playerScore}`;
    compScoreSpan.innerText = `Computer's Score: ${compScore}`
}


function playRound(computerChoice, userChoice) {   
    const p = document.createElement('p');

    if (userChoice === computerChoice){        
        p.innerText = `Draw! You both chose: ${userChoice}!`        
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerScore++;        
        p.innerText = `You Win! ${userChoice} beats ${computerChoice}!`        
    } else {
        compScore++;        
        p.innerText = `You Lose! ${computerChoice} beats ${userChoice}!`        
    }
    resultsDiv.appendChild(p);   
}


const checkWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h3 = document.createElement("h3");
        h3.classList.add('player-won');
        h3.innerText = "You Win! Awesome job!"
        resultsDiv.appendChild(h3);
    }

    if (compScore === 5) {
        const h3 = document.createElement("h3");
        h3.classList.add('comp-won');
        h3.innerText = "You Lose! Better luck next time!"
        resultsDiv.appendChild(h3);
    }    
} 

rockButton.addEventListener("click", () => {
    empty(resultsDiv);
    const computerChoice = getComputerChoice();
    const userChoice = "Rock";
    playRound(computerChoice, userChoice);
    displayScore(playerScore, compScore)    
    checkWinner(playerScore, compScore);
})

paperButton.addEventListener("click", () => {
    empty(resultsDiv);
    const computerChoice = getComputerChoice();
    const userChoice = "Paper";
    playRound(computerChoice, userChoice);
    displayScore(playerScore, compScore)
    checkWinner(playerScore, compScore);
})

scissorsButton.addEventListener("click", () => {
    empty(resultsDiv);
    const computerChoice = getComputerChoice();
    const userChoice = "Scissors";
    playRound(computerChoice, userChoice);
    displayScore(playerScore, compScore)
    checkWinner(playerScore, compScore);
})

