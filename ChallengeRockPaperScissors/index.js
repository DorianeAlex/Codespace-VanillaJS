// function is called when one of the buttons is clicked on
function playGame(userChoice) {
  // defining constant with an array and by applying a formula to get a random option for the computer choice
  const options = ['rock', 'paper', 'scissors'];
  const computerChoice = options[Math.floor(Math.random() * 3)];

  let result;
// applying a conditional statement to perform different actions and verify if statements are true
  // if first statement is false when it will perform the second and so on until true 
if (userChoice === computerChoice) { 
    result = "It's a tie!🙃";
  } else if (
    // defining when the player is winning over the computer
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!🥳";
  } else {
    // when the conditions above are not met then the player lose
    result = "You lose!😓";
  }
// linking the result element from hmtl doc and change the text when the function is run, displaying the player's choice, the computer's choice and result
  document.getElementById("result").innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}