let userChoice1 = document.getElementById('rock-btn');
let userChoice2 = document.getElementById('paper-btn');
let userChoice3 = document.getElementById('scissors-btn');
let showWin = document.getElementById('wins');
let showDraws = document.getElementById('draws');
let showLose = document.getElementById('losses');
let ai = document.getElementById('ai-choice');

let playerRoll;
let wins = 0;
let draws = 0;
let losses = 0;



let gameMessage = document.getElementById('game-message');

const myArray =["rock","paper","scissors"]





const gameBegin1 =()=>{

  playerRoll = myArray[0];

  let computerChoice = (Math.floor(Math.random()*myArray.length ));
   ai.textContent = (myArray[computerChoice]);

  if(myArray[computerChoice] === playerRoll){
    draws++;
    showDraws.textContent = `${draws}`;

    gameMessage.textContent= "DRAW!";

    gameMessage.classList.add("game-draw");
     gameMessage.classList.remove("game-lose");
    gameMessage.classList.remove("game-won");

  }else if(myArray[computerChoice] === myArray[1] && playerRoll===myArray[0]  ){

  
    losses++;
    showLose.textContent = `${losses}`;

    gameMessage.textContent= "YOU LOSE!";
    gameMessage.classList.add("game-lose");
    gameMessage.classList.remove("game-draw");
    gameMessage.classList.remove("game-won");



  }else{
    
    wins++;
    showWin.textContent = `${wins}`;
    gameMessage.textContent= "YOU WIN!";
    gameMessage.classList.add("game-won");
     gameMessage.classList.remove("game-draw");
    gameMessage.classList.remove("game-lose");
  }
      
  
};


const gameBegin2=()=>{
  playerRoll = myArray[1];

  let computerChoice = (Math.floor(Math.random()*myArray.length ));
   ai.textContent = (myArray[computerChoice]);
  
  if(myArray[computerChoice] === playerRoll){
    
    draws++;
    showDraws.textContent = `${draws}`;
    gameMessage.textContent= "DRAW!";
    gameMessage.classList.add("game-draw");
     gameMessage.classList.remove("game-lose");
    gameMessage.classList.remove("game-won");

  }else if(myArray[computerChoice] === myArray[2] && playerRoll===myArray[1]  ){

    
    losses++;
    showLose.textContent = `${losses}`;
    gameMessage.textContent= "YOU LOSE!";
    gameMessage.classList.add("game-lose");
     gameMessage.classList.remove("game-draw");
    gameMessage.classList.remove("game-won");

  }else{
    wins++;
    showWin.textContent = `${wins}`;
    gameMessage.textContent= "YOU WIN!";
    gameMessage.classList.add("game-won");
     gameMessage.classList.remove("game-draw");
    gameMessage.classList.remove("game-lose");
  }


};

const gameBegin3=()=>{
  playerRoll = myArray[2];

  let computerChoice = (Math.floor(Math.random()*myArray.length ));
   ai.textContent = (myArray[computerChoice]);
  if(myArray[computerChoice] === playerRoll){
    draws++;
    showDraws.textContent = `${draws}`;
    gameMessage.textContent= "DRAW!";
     gameMessage.classList.add("game-draw");
     gameMessage.classList.remove("game-lose");
    gameMessage.classList.remove("game-won");
  }else if(myArray[computerChoice] === myArray[0] && playerRoll===myArray[2]  ){
    losses++;
    showLose.textContent = `${losses}`;
    gameMessage.textContent= "YOU LOSE!";
     gameMessage.classList.add("game-lose");
     gameMessage.classList.remove("game-draw");
    gameMessage.classList.remove("game-won");

  }else{
    wins++;
    showWin.textContent = `${wins}`;
    gameMessage.textContent= "YOU WIN!";
    gameMessage.classList.add("game-won");
     gameMessage.classList.remove("game-draw");
    gameMessage.classList.remove("game-lose");
  }




};

userChoice1.addEventListener("click",gameBegin1);

userChoice2.addEventListener("click",gameBegin2);

userChoice3.addEventListener("click",gameBegin3);

let resetButton = document.getElementById("reset-scores");


const resetScores =()=>{
  wins = 0;
  losses = 0;
  draws = 0;
}

resetButton.addEventListener("click",resetScores)







