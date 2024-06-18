
const choices =['rock', 'paper', 'scissors']; // make a variable to store the computer's choices


const displayWinner = document.getElementById("message"); // make a container to store the the value to use in the future
const robotMessage = document.getElementById("robot");
const winsDisplay =document.getElementById('wins');
const losesDisplay =document.getElementById('loses');

let playerScore = 0; // variable to store the player score and computer score
let computerScore = 0;

function playgame(playerchoice) { // function to randomly generate and compare the user input and with the computer choice 

    const computerChoice =choices[Math.floor(Math.random() * 3)]; // cast a variable to store the randomly generated numbers and assign them to a variable.
    
    let result;

    if (playerchoice === computerChoice) {
        result = "IT'S A TIE!";
    }else if (playerchoice === 'scissors' && computerChoice === 'rock') {
        result = "YOU LOSE! 😣";
    } else if (playerchoice === 'paper' && computerChoice === 'scissors'){
        result = "YOU LOSE! 😣";  
    } else if (playerchoice === 'rock' && computerChoice === 'paper') {
        result = "YOU LOSE! 😣"
    }else{
        result = "YOU WIN! 😀"
    }

    // console.log(`${result} the computer chose ${computerChoice}`);
   displayWinner.textContent = result;
   robotMessage.textContent = computerChoice; 


   switch(result){
    case "YOU WIN! 😀":
        displayWinner.classList.add("goldenText");
        playerScore++;
        winsDisplay.textContent = playerScore;
        break

    case "YOU LOSE! 😣":
    robotMessage.classList.add("redText");
    computerScore++;
    losesDisplay.textContent = computerScore;
    break

    case "IT'S A TIE!":
        displayWinner.classList.add("green");
        break
   }

}

