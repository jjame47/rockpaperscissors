const validOptions = ['rock','paper','scissors'];
let playerWins = 0;
let playerLosses = 0;
let playerTies = 0;

loadElements();

function getComputerChoice(){
    let choiceInt = Math.floor(Math.random() * validOptions.length);
    return validOptions[choiceInt];
}

function getResults(playerChoice, computerChoice){
    let result = "";

    if(playerChoice == computerChoice){
        result = "T";
    }
    else if(playerChoice == 'rock' && computerChoice == 'scissors'){
        result = "W";
    }
    else if(playerChoice == 'paper' && computerChoice == 'rock'){
        result = "W";
    }
    else if(playerChoice == 'scissors' && computerChoice == 'paper'){
        result = "W";
    }
    else {
        result = "L";
    }
    const pRound = document.querySelector('.round');
    pRound.textContent = `Result: ${result}. You selected: ${playerChoice}. Computer selected: ${computerChoice}`;

    return result;
}

function updateRecord(result){
    if(result == "W"){playerWins++};
    if(result == "L"){playerLosses++};
    if(result =="T"){playerTies++};
    
    const pRecord = document.querySelector('.record');
    pRecord.textContent = `Current record is ${playerWins} win(s), ${playerLosses} loss(es), ${playerTies} tie(s)`;

}

function playRound(playerChoice){
    computerChoice = getComputerChoice();
    result = getResults(playerChoice, computerChoice);
    updateRecord(result);
}

function loadElements(){
    const body = document.querySelector('body');

    const h1 = document.createElement('h1');
    h1.textContent = 'Rock Paper Scissors';
    body.appendChild(h1);
    
    const divGame = document.createElement('div');
    
    const buttonRock = document.createElement('button');
    buttonRock.textContent = 'Rock';
    buttonRock.id = 'rock';
    divGame.appendChild(buttonRock);
    
    const buttonPaper = document.createElement('button');
    buttonPaper.textContent = 'Paper';
    buttonPaper.id = 'paper';
    divGame.appendChild(buttonPaper);
    
    const buttonScissors = document.createElement('button');
    buttonScissors.textContent = 'Scissors';
    buttonScissors.id = 'scissors';
    divGame.appendChild(buttonScissors);
    
    body.appendChild(divGame);
    
    const gameButtons = divGame.querySelectorAll('button');
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id);
        });
    });

    const divResults = document.querySelector('div');

    const pRound = document.createElement('p');
    pRound.classList.add('round');
    pRound.style.color = 'Red';
    pRound.style.fontSize = '32px';
    pRound.textContent = 'Click any button to play!';
    divResults.appendChild(pRound);

    const pRecord = document.createElement('p');
    pRecord.classList.add('record');
    pRecord.style.color = 'Black';
    pRecord.style.fontSize = '32px';
    pRecord.textContent = '0 win(s), 0 loss(es), 0 tie(s)';
    divResults.appendChild(pRecord);

    body.appendChild(divResults);
    
}



