// Rock Paper Scissors Game 
// create a function that generates computer choice    
//     function will generate a number between 1-3 that correlates to rock, paper or Scissors
//     save that generated output to a variable 
// create a function that takes player selection when player clicks on given cards(button)
// create a function that takes the two parameters and compares them 

//function to produce computer's choice
let getCompChoice = () =>  {
    let x = Math.floor(Math.random() * 3) +1;
    if (x == 1){
        return "rock";
    }
    else if(x == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// initializing variables
let win;
let playerScore = 0;
let compScore = 0;
let round = 1;
const rnd = document.getElementById('rnd');
const rpsGame = document.getElementsByClassName("rps-game");

// function that plays one round of RPS
function playRound(userChoice) {
    let compChoice = getCompChoice();
    let roundResult = result(userChoice, compChoice);
    console.log(`You chose ${userChoice}, computer chose ${compChoice}, result: ${roundResult}`);
    rnd.innerHTML =`Round: ${round}`;
};

// function for the user choice
let result = (userChoice, compChoice) => {
    let result = 'undecided';
    // check for tie
    if(userChoice == compChoice){
        result = 'tie';
    }
    else if(userChoice == 'rock'){
        result = compChoice == 'scissors' ? 'win' : 'lose';
        if(result =='win'){
            playerScore++;
        }else{
            compScore++;
        }
    }
    else if (userChoice == 'paper') {
        result = compChoice == 'rock' ? 'win' : 'lose';
        if(result =='win'){
            playerScore++;
        }else{
            compScore++;
        }
    }
    else if (userChoice == 'scissors') {
        result = compChoice == 'paper' ? 'win' : 'lose';
        if(result =='win'){
            playerScore++;
        }else{
            compScore++;
        }
    }
    // finish round and return result
    round++;
    console.log(round);
    return result;
}

// Set event handlers
let setHandlers = () => {

document.getElementById('rock').onclick = function () {
    if(compScore < 2){
        playRound('rock');
    }
    else{
       endGame();
    }
};
document.getElementById('paper').onclick = function () {
    if(compScore < 2){
        playRound('paper');
    }
    else{
        endGame();
    }
};
document.getElementById('scissors').onclick = function () {
    if(compScore < 2){
        playRound('scissors');
    }
    else{
        endGame();
    }
};
};

// Function when game ends
let endGame =() => {
    rpsGame.style.display = 'none';
    if(playerScore == 2){
        alert("Congrats! You Win!");
    }else{
        alert("Sorry you lost :(");
    }
};

const main = () => {
    setHandlers();
    rpsGame.style.cssText = 'color: red;';
}
main();
