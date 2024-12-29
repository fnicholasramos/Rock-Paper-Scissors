const start = () => {
    let show  = document.querySelector('#results');
  
    if (show.style.display === 'none') {
      show.style.display = 'flex';
    } else {
      show.style.display = 'none'
    }
  };
  
  // iniatialize this directly in js file in order to start(button) immediately
  document.querySelector('#results').style.display = 'none';
  
  document.querySelectorAll('#rock, #paper, #scissors').forEach(button => {
    button.disabled = true;
    button.style.cursor = 'not-allowed'; 
    button.style.opacity = 0.6;
  
    button.addEventListener('mouseover', () => {
      if (!button.disabled) { 
        button.style.backgroundColor = '#FDF5E6';  
      }
    });
  
    button.addEventListener('mouseout', () => {
      if (!button.disabled) {
        button.style.backgroundColor = '#f7ead3';  
        button.style.opacity = '1';  
      }
    });
  });
  
  const hideAfterStart = document.querySelector('.start');
  hideAfterStart.addEventListener('click', () => {
    let hideButton = hideAfterStart.style.display = 'none';
  
    document.querySelectorAll('#rock, #paper, #scissors').forEach(button => {
      button.disabled = false; 
      button.style.cursor = 'pointer'
      button.style.backgroundColor = '#f7ead3';
      button.style.opacity = 1;
    });
  })
  
  let humanScore = 0;
  let computerScore = 0;
  
  function getComputerChoice() {
    const computerPick = ['rock', 'paper', 'scissors'];
  
    let random = computerPick[Math.floor(Math.random() * computerPick.length)];
    return random;
  }
  
  // Play Round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return 'Draw!';
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
      return 'Human Wins!';
    } else {
      return 'Computer Wins!';
    }
  }
  
  let round = 1;
  
  function playGame(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5 || round >= 6) return; 
  
    const computerSelection = getComputerChoice();
    const result = playRound(humanChoice, computerSelection);
  
    if (result === 'Human Wins!') {
      humanScore++;
    } else if (result === 'Computer Wins!') {
      computerScore++;
    }
  
    // Update the DOM
    document.getElementById('round-result').innerHTML = `${humanChoice} vs ${computerSelection} <br> ${result}`;
    document.getElementById('yourScore').textContent = `${humanScore}`;
    document.getElementById('computerScore').textContent = `${computerScore}`;
    document.querySelector('.roundCount').textContent = round;
    round++;
  
    // winner
    if (round > 5) {
      if (humanScore > computerScore) {
        document.getElementById('winner').textContent = "You win! Congratulations!";
      } else if (computerScore === humanScore) {
        document.getElementById('winner').textContent = "It's a tie!";
      } else {
        document.getElementById('winner').textContent = "You lose! Better luck next time!"
      }
    }
  }
  
  document.getElementById('rock').addEventListener('click', () => playGame('rock'));
  document.getElementById('paper').addEventListener('click', () => playGame('paper'));
  document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
  