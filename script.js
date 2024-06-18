
const choices =['rock', 'paper', 'scissors'];


const displayWinner = document.getElementById("message");
const robotMessage = document.getElementById("robot");
const winsDisplay =document.getElementById('wins');
const losesDisplay =document.getElementById('loses');

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice) {

    const computerChoice =choices[Math.floor(Math.random() * 3)];
    
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

