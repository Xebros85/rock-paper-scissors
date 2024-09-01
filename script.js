// Global Variables

const choices = ["rock", "paper", "scissors"];


// function will get the computer's choice. Rock paper or scissors

function getComputerChoice() {
    let compChoiceIndex = Math.floor(Math.random() * choices.length);    
    return choices[compChoiceIndex];    
}

// Prompt the user to input their choice. Rock Paper or Scissors 
function getUserChoice() {
       
    let buttonChoices = document.querySelector("#buttonChoices");

    buttonChoices.addEventListener("click", (event) => {
        let target = event.target;        

        switch (target.id) {
            case "choiceRock":
                console.log("rock");                                
                break;
            case "choicePaper":
                console.log("paper");                                
                break;
            case "choiceScissors":
                console.log("scissors");                                
                break;
        }
    })

    
        
}
    // let validInput = false;

    // while (validInput === false) {        
    //     let userInput = window.prompt("Let's play a game...\n\nChoose wisely:\nRock, Paper, or Scissors:");

    //     if (userInput === null) {
    //         alert("Input cancelled. Please provide a valid input.")
    //         continue;
    //     }

    //     userInput = userInput.trim().toLowerCase();
        
    //     if (choices.includes(userInput)) {
    //         validInput = true;
    //         return userInput;
    //     } else {
    //         alert("Invalid choice. Please choose Rock, Paper or Scissors.");
    //     }
    // } 


// compare computer choice to user choice
// Rock beats scissors, Scissors beats paper, paper beats rock

function playRound() { 
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();       

    let result;
    if (userChoice === computerChoice){
        result = "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
    } else {
        result = "lose";
    }

    return {result, userChoice, computerChoice};
}

// Tally the score
function playGame() {    
    let roundCount = 1;
    let computerScore = 0;
    let userScore = 0;

    while (roundCount <= 5) {        
        let {result, userChoice, computerChoice} = playRound();

        switch (result) {
            case "win":
                userScore++;
                alert(`\nYou Win!\n
                The computer chose: ${computerChoice.toUpperCase()}
                You chose: ${userChoice.toUpperCase()}\n
                Computer Score: ${computerScore} Player Score: ${userScore}`);                                
                break;

            case "lose":
                computerScore++;
                alert(`\nYou Lost!\n
                The computer chose: ${computerChoice.toUpperCase()}
                You chose: ${userChoice.toUpperCase()}\n
                Computer Score: ${computerScore} Player Score: ${userScore}`);                                
                break;

            case "draw":
                roundCount--;
                alert(`\nIt's a Tie!!\n
                    The computer chose: ${computerChoice.toUpperCase()}
                    You chose: ${userChoice.toUpperCase()}\n
                    Computer Score: ${computerScore} Player Score: ${userScore}`);            
                break;
        }
        roundCount++;
    }
    
    // Display final result:
    alert(`Game Over!\n\nFinal Score:\n\nComputer: ${computerScore}\nPlayer: ${userScore}`)
}


