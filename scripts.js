// Computer choice
function getComputerChoice() {
    const computerPick = ['rock', 'paper', 'scissors'];

    let random = computerPick[Math.floor(Math.random() * computerPick.length)];
    return random;
}

//Human choice
function getHumanChoice() {
    const humanPick = ['rock', 'paper', 'scissors']

    let askUser = prompt("Pick your choice:\n ROCK | PAPER | SCISSORS", '').toLowerCase();
    if (!humanPick.includes(askUser)) {
       return 'Invalid choice, try again!';
    } 
    return askUser;
}

//Play Round
function playRound(humanChoice, computerChoice) {   
    if (humanChoice.toLowerCase() === computerChoice) {
        return 'Draw!';
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
        return 'Computer Wins!';
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
        return 'Human Wins!';
    } else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
        return 'Human Wins!';
    } else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        return 'Computer Wins!';
    } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        return 'Computer Wins!';
    } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        return 'Human Wins!';
    }
}

//Play Game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}:`)
        console.log('Human: ' + humanSelection);
        console.log('Computer: ' + computerSelection);

        let result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result === 'Human Wins!') {
            humanScore++
        } else if (result === 'Computer Wins!') {
            computerScore++
        }

        console.log(`Human ${humanScore} vs Computer ${computerScore}\n\n\n`)
    }

    if (humanScore > computerScore) {
        console.log('You win! Congratulations!')
    } else if (humanScore === computerScore) {
        console.log(`It's a tie!`)
    } else {
        console.log('You lose! Better luck next time!')
    }
}

console.log(playGame())