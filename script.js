// function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
    // generate a random number that is either 0, 1 or 2. store that in a variable
    let randomNumber = Math.floor(Math.random()*3);

    // assign 0 as 'Rock', 1 as 'Paper', 2 as 'Scissors' and returns the value
    if (randomNumber == 0) {
        return 'Rock';
    } else if (randomNumber == 1) {
        return 'Paper';
    } else if (randomNumber == 2) {
        return 'Scissors';
    } else {
        return 'Something went wrong...';
    }
}

// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: 
// "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {

    // create a variable to store the winner information
    let winner;

    // logic checks
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            winner = 'tie';
        } else if (computerSelection === 'Paper') {
            winner = 'computer';
        } else if (computerSelection === 'Scissors') {
            winner = 'player';
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            winner = 'player';
        } else if (computerSelection === 'Paper') {
            winner = 'tie';
        } else if (computerSelection === 'Scissors') {
            winner = 'computer';
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            winner = 'computer';
        } else if (computerSelection === 'Paper') {
            winner = 'player';
        } else if (computerSelection === 'Scissors') {
            winner = 'tie';
        }
    }

    // return the message to the player
    if (winner === 'player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (winner === 'computer') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;   
    } else if (winner === 'tie') {
        return 'Tie Game!';
    }
}



// display running score
let playerScore = 0;
let computerScore = 0;
let gameWinner;

let playerScoreDisplay = document.querySelector('.playerScore');
let computerScoreDisplay = document.querySelector('.computerScore');

playerScoreDisplay.textContent = 'player: ' + playerScore;
computerScoreDisplay.textContent = 'computer: ' + computerScore;

// feature branch - UI
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', () => {

    let thisRoundResult = playRound(btn.id, computerPlay());

    const results = document.querySelector('.results p');

    // animation of click event
    btn.classList.add('click');

    // decide game winner
    if (!gameWinner) {

        // display round result
        results.textContent = thisRoundResult;

        // increment score
        if (thisRoundResult.includes('Win')) {
            playerScore++;
        } else if (thisRoundResult.includes('Lose')) {
            computerScore++;
        }
        playerScoreDisplay.textContent = 'player: ' + playerScore;
        computerScoreDisplay.textContent = 'computer: ' + computerScore;
        
        // announce winner once one player reaches 5 points
        if (playerScore >= 5) {
            gameWinner = 'player';
            playerScoreDisplay.classList.add('winner');
            const message = document.querySelector('.message');
            message.textContent = 'YOU WIN!';
            message.classList.add('flash');

        } else if (computerScore >= 5) {
            gameWinner = 'computer';
            computerScoreDisplay.classList.add('winner');
            const message = document.querySelector('.message');
            message.textContent = 'YOU LOSE...';
            message.classList.add('flash');
        }
    } 
}));


function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('click');
  }


const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));


