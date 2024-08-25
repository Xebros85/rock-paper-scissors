// Global Variables
let computerScore = 0;
let userScore = 0;
const choices = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();


// function will get the computer's choice. Rock paper or scissors
// 0 == Rock 1 == Paper 2 == Scissors

function getComputerChoice() {
    let compChoiceIndex = Math.floor(Math.random() * choices.length);
    console.log(choices[compChoiceIndex]);
    return choices[compChoiceIndex];    
}

// Prompt the user to input their choice. Rock Paper or Scissors 
function getUserChoice() {
            
    let validInput = false;

    while (validInput === false) {        
        let userInput = window.prompt("Let's play a game...\n\nChoose wisely:\nRock, Paper, or Scissors:");

        if (userInput === null) {
            alert("Input cancelled. Please provide a valid input.")
            continue;
        }

        userInput = userInput.trim().toLowerCase();
        
        if (choices.includes(userInput)) {
            validInput = true;
            return userInput;
        } else {
            alert("Invalid choice. Please choose Rock, Paper or Scissors.");
        }
    } 
}

// compare computer choice to user choice
// Rock beats scissors, Scissors beats paper, paper beats rock

function playRound() {        

    switch (userChoice) {
        case "rock":
            if (computerChoice === "paper") {                
                return "lose";
            } else if (computerChoice === "scissors") {                
                return "win";
            } else {
                return "draw";
            }        
        
        case "paper":
            if (computerChoice === "scissors") {                
                return "lose";
            } else if (computerChoice === "rock") {                
                return "win";
            } else {
                return "draw";
            }
            
        case "scissors":
            if (computerChoice === "rock") {                
                return "lose";
            } else if (computerChoice === "paper") {                
                return "win";
            } else {
                return "draw";
            } 
    }
    
}

// Tally the score
function playGame() {    
    let roundCount = 1;

    while (roundCount <= 5) {
        let round = playRound();
        switch (round) {
            case "win":
                alert(`\nYou Win!\n
                The computer chose: ${computerChoice.toUpperCase()}
                You chose: ${userChoice.toUpperCase()}\n
                Computer Score: ${computerScore} Player Score: ${userScore}`);
                userScore++;                
                break;

            case "lose":
                alert(`\nYou Lost!\n
                The computer chose: ${computerChoice.toUpperCase()}
                You chose: ${userChoice.toUpperCase()}\n
                Computer Score: ${computerScore} Player Score: ${userScore}`);
                computerScore++;                
                break;

            case "draw":
                alert("It's a tie!");            
                break;
        }
        roundCount++;
    }
    
    // Display final result:
    alert(`Game Over!\nFinal Scores:\nComputer: ${computerScore}\nPlayer: ${userScore}`)
}   


playGame();