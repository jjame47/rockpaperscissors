const validOptions = ['rock','paper','scissors'];
let playerWins = 0;
let playerLosses = 0;
let playerTies = 0;

function getComputerChoice(){
    let choiceInt = Math.floor(Math.random() * validOptions.length);
    return choiceInt;
}

function getPlayerChoice(){
    while(true){
        let promptString = "Choose one of the following:\n\n";
        for(let x = 0; x < validOptions.length; x++){
            promptString += `${validOptions[x]}\n`;
        }
        let choice = prompt(promptString).toLowerCase().trim();
        let choiceInt = validOptions.indexOf(choice);
        if (choiceInt >= 0){
            return choiceInt;
        }
        alert(`${choice} was not valid. Please try again.`);
    }
}

function getResults(playerChoice, computerChoice){
    const indexMax = validOptions.length - 1;
    let result = "";

    console.log(`You selected: ${validOptions[playerChoice]}. Computer selected: ${validOptions[computerChoice]}`);

    if(playerChoice == computerChoice){
        result = "T";
    }
    else if(playerChoice == 0 && computerChoice == indexMax){
        result = "W";
    }
    else if(computerChoice == 0 && playerChoice == indexMax){
        result = "L";
    }
    else if(playerChoice < computerChoice){
        result = "L";
    }
    else {
        result = "W";
    }
    console.log(result);
    return result;
}

function updateRecord(result){
    if(result == "W"){playerWins++};
    if(result == "L"){playerLosses++};
    if(result =="T"){playerTies++};
}

function playRound(){
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    result = getResults(playerChoice, computerChoice);
    updateRecord(result);
}

function printRecord(){
    console.log(`Current record is ${playerWins} win(s), ${playerLosses} loss(es), ${playerTies} tie(s)`);
}

function game(){
    console.log('Welcome to Rock Paper Scissors');
    while(true){
        playRound();
        printRecord();
        playAgain = prompt('Play again (y/n)?').toLowerCase().trim();
        if(playAgain != 'y'){
            console.log('Thank you for playing, goodbye!');
            break;
        }
    }
}

game();
