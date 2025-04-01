let score = JSON.parse(localStorage.getItem('score')) || {win : 0,loss : 0,
tie : 0,} 

subCount();

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
      let playerMove = " ";
      const randomNumber = Math.random();
      if(randomNumber >= 0 && randomNumber < 1/3){
        playerMove = 'Rock';
      } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        playerMove = 'Paper';
      } else if(randomNumber >= 2/3 && randomNumber < 1){
        playerMove = 'Scissor';
      }
      start(playerMove);
    }, 2000)
    isAutoPlaying = true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  } 
}

function start(playerMove){
  let computerValue = " ";
  const randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerValue = 'Rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerValue = 'Paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1){
    computerValue = 'Scissor';
  }
  let result = "";
  if (playerMove === 'Rock'){
    
    if(computerValue === "Rock"){
      result = 'Tie';
    } else if(computerValue === "Paper"){
      result = 'You lose';
    } else if(computerValue === "Scissor"){
      result = 'You win';
    }

  } else if(playerMove === 'Paper'){
    // let result = "";
    if(computerValue === "Rock"){
      result = 'You win';
    } else if(computerValue === "Paper"){
      result = 'Tie';
    } else if(computerValue === "Scissor"){
      result = 'You lose';
    }

  } else if(playerMove === 'Scissor'){
    // let result = "";
    if(computerValue === "Rock"){
      result = 'You lose';
    } else if(computerValue === "Paper"){
      result = 'You win';
    } else if(computerValue === "Scissor"){
      result = 'Tie';
    }

  }

  if(result === 'You lose'){
    score.loss += 1;
  }else if(result === 'You win'){
    score.win += 1;
  } else if(result === 'Tie'){
    score.tie += 1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  subCount()

  document.querySelector('.js-add-result')
  .innerHTML = result;

  document.querySelector('.js-update-move')
  .innerHTML = `You <img class="img1" src="game copy/spr game/${playerMove}-emoji.png" alt=""> - <img class="img1" src="game copy/spr game/${computerValue}-emoji.png" alt=""> Computer`;


  // alert(`You picked ${playerMove}. Computer picked ${computerValue}. So ${result}.
  // win: ${score.win} Loss: ${score.loss} Tie: ${score.tie}`)

  return computerValue;
}

function subCount(){
  document.querySelector('.js-add-score')
  .innerHTML = `win: ${score.win} Loss: ${score.loss} Tie: ${score.tie}`;
}


  

