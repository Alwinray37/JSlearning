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

// declaring variables
let win;
let score = 0;
let round = 0;

// function that plays one round of RPS
function playRound(userChoice) {
    let compChoice = getCompChoice();
    let roundResult = result(userChoice, compChoice);
    console.log(`You chose ${userChoice}, computer chose ${compChoice}, result: ${roundResult}`)
};
let result = (userChoice, compChoice) => {
    let result = 'undecided';
    // check for tie
    if(userChoice == compChoice){
        result = 'tie';
    }
    else if(userChoice == 'rock'){
        result = compChoice == 'scissors' ? 'win' : 'lose';
    }
    else if (userChoice == 'paper') {
        result = compChoice == 'rock' ? 'win' : 'lose';
    }
    else if (userChoice == 'scissors') {
        result = compChoice == 'paper' ? 'win' : 'lose';
    }
    // finish round and return result
    round++;
    console.log(round);
    return result;
}

// Set event handlers
let setHandlers = () => {
    document.getElementById('rock').onclick = function () {
      playRound('rock');
    };
    document.getElementById('paper').onclick = function () {
      playRound('paper');
    };
    document.getElementById('scissors').onclick = function () {
      playRound('scissors');
    };
};

const main = () => {
    setHandlers();
}
main();



