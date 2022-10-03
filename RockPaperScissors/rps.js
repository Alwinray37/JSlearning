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
let playerSelection = "";

// function that plays one round of RPS
function playRound() {
    let compChoice = getCompChoice();
   
    document.getElementById("rock").onclick = function(){
    playerSelection = "rock";
    console.log(playerSelection, compChoice);
    console.log(result());
    }
    document.getElementById("paper").onclick = function(){
    playerSelection = "paper";
    console.log(playerSelection, compChoice);
    console.log(result());
    }
    document.getElementById("scissors").onclick = function(){
    playerSelection = "scissors";
    console.log(playerSelection, compChoice);
    console.log(result());
    }


    let result = () => {
        if (playerSelection == compChoice){
            return "tie";
        }
        else if(playerSelection == "paper" && compChoice == "rock"){
            win += 1;
            return "win";
        }
        else if(playerSelection == "paper" && compChoice == "scissors"){
            return "loss";
        }
        else if(playerSelection == "rock" && compChoice == "paper"){
            return "loss";
        }
        else if(playerSelection == "rock" && compChoice == "scissors"){
            win += 1;
            return "win";
        }
        else if(playerSelection == "scissors" && compChoice == "rock"){
            return "loss";
        }
        else if(playerSelection == "scissors" && compChoice == "paper"){
            win += 1;
            return "win";
        }
        else{
            return "ERROR";
        }
    }   
};
const game = () => {
    playRound();
    playRound()
}
game();


