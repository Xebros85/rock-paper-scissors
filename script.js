
// function will get the computer's choice. Rock paper or scissors
// 0 == Rock 1 == Paper 2 == Scissors
// Rock beats scissors, Scissors beats paper, Paper beats rock
function getComputerChoice() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(2);
    compChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1));
    if (compChoice === 0) {
        return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

// Prompt the user to input their choice. Rock Paper or Scissors  

function getUserChoice() {
    const userChoices = [
        'rock',
        'paper',
        'scissors'
    ]    
    let validInput = false;

    while (validInput === false) {        
        let userInput = window.prompt("Let's play a game...\n\nChoose wisely:\nRock, Paper, or Scissors:");

        if(userInput === null) {
            alert("Input Cancelled. Please try again.");
            continue;
        }

        userInput = userInput.trim().toLowerCase();
        
        if (userChoices.includes(userInput)) {
            validInput = true;
            return userInput;
        } else {
            alert("Invalid choice. Please choose Rock, Paper or Scissors.");
        }
    } 
}

console.log(getUserChoice());

// compare computerChoice with userInput




// play game -- while round count is less than 5 keep playing
// best 3 out of 5??
// This function wraps the rest of the program
// keeps score 
