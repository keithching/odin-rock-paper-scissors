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

// Write a NEW function called game(). 
// Use the previous function inside of this one to play a 5 round game that 
// keeps score and reports a winner or loser at the end.
function game() {

    // create variables to count the scores of the player and the computer
    // initializes them with score of 0
    let playerScore = 0;
    let computerScore = 0;

    // 5 rounds of game
    for (let i = 0; i < 5; i++) {

        // Use prompt() to get input from the user
        let playerSelection = prompt(`Game ${i+1}: Rock, Paper, or Scissors?`, '');

        // if the player hits Esc or Cancel, return from the function for cancellation of program
        if (playerSelection === null) {
            alert('game canceled');
            return;
        }

        // reformat the playSelection string so only the first letter is capitalized
        // Make the function’s playerSelection parameter case-insensitive 
        // (so users can input rock, ROCK, RocK or any other variation)
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        
        // ask the player to reinput if the string provided is not either one of the above
        while (!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')) {
            playerSelection = prompt(`typo? please try again.\nGame ${i+1}: Rock, Paper, or Scissors?`, '');
     
            // if the player hits Esc or Cancel, return from the function for cancellation of program
            if (playerSelection === null) {
                alert('game canceled');
                return;
            }

            playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        }

        console.log(`playerSelection: ${playerSelection}`);

        // call the computerPlay() function and store the return value in computerSelection
        let computerSelection = computerPlay();

        console.log(`computerSelection: ${computerSelection}`);

        // store the playRound result in a variable named thisRoundResult
        let thisRoundResult = playRound(playerSelection, computerSelection);

        // using console.log() to display the results of each round
        console.log(thisRoundResult);

        // increment the score by conditional checks
        if (thisRoundResult.includes('Win')) {
            playerScore++;
        } else if (thisRoundResult.includes('Lose')) {
            computerScore++;
        }
        console.log(`Current playerScore is ${playerScore}`);
        console.log(`Current computerScore is ${computerScore}`);
    }
    // console log for the winner at the end
    console.log(`Final playerScore is ${playerScore}`);
    console.log(`Final computerScore is ${computerScore}`);

    if (playerScore > computerScore) {
        alert('Player Wins!');
    } else if (playerScore < computerScore) {
        alert('Computer Wins!');
    } else {
        alert('Tie Games!');
    }
}


// call the game() function
game();
