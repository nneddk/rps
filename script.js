const playButton = document.getElementById('play-again-button');
const newGameScreen = document.getElementById('new-game');

const gameResult = document.getElementById('result');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const matchResult = document.getElementById('match-result');
const playerScore = document.getElementById('player-score');
const opponentScore = document.getElementById('opponent-score');

const pvc = document.getElementById('player-vs-computer');

const playerPicture = document.getElementById('player-picture');
const opponentPicture = document.getElementById('opponent-picture');
let scoreGoal = 0;
let pScore = 0, oScore = 0;
playButton.onclick = function(){
    newGameScreen.style.height = '0';
    newGameScreen.style.paddingBottom = '0';
    scoreGoal = document.getElementById('goal-score').value;
    playerScore.textContent = 0;
    opponentScore.textContent= 0;
    matchResult.textContent = '';;
    playerPicture.style.background = 'url(./images/rk.png)';
    playerPicture.style.backgroundSize =  '75%';
    playerPicture.style.backgroundRepeat =  'no-repeat';
    playerPicture.style.backgroundPosition = 'center';
    playerPicture.style.transform = 'rotate(90deg)';
    playerPicture.style.transition = 'all 0.5s ease-in-out';

    opponentPicture.style.background = 'url(./images/op_rk.png';
    opponentPicture.style.backgroundSize =  '75%';
    opponentPicture.style.backgroundRepeat =  'no-repeat';
    opponentPicture.style.backgroundPosition = 'center';
    opponentPicture.style.transform = 'rotate(-90deg)';
    opponentPicture.style.transition = 'all 0.5s ease-in-out';

}


let enabled = 1;
const el = this;
rockButton.onclick = function(){
    if (enabled == 1){
        playerPicture.style.transform = 'rotate(0deg)';
        opponentPicture.style.transform = 'rotate(0deg';
        playerPic(2)
        enabled = 0;
        setTimeout(() => {
            enabled = 1;
        }, 1000);
    }
    
}
paperButton.onclick = function(){
    if (enabled == 1){
        playerPicture.style.transform = 'rotate(0deg)';
        opponentPicture.style.transform = 'rotate(0deg';
        playerPic(1);
        enabled = 0;
        setTimeout(() => {
            enabled = 1;
        }, 1000);
    }
    
}
scissorsButton.onclick = function(){
    if (enabled == 1){
        playerPicture.style.transform = 'rotate(0deg)';
        opponentPicture.style.transform = 'rotate(0deg';
        playerPic(0);
        enabled = 0;
        setTimeout(() => {
            enabled = 1;
        }, 1000);
    }
}

function playerPic(pic) {
    playerPicture.style.background = 'url(./images/rk.png)';
    playerPicture.style.backgroundSize =  '75%';
    playerPicture.style.backgroundRepeat =  'no-repeat';
    playerPicture.style.backgroundPosition = 'center';

    opponentPicture.style.background = 'url(./images/op_rk.png';
    opponentPicture.style.backgroundSize =  '75%';
    opponentPicture.style.backgroundRepeat =  'no-repeat';
    opponentPicture.style.backgroundPosition = 'center';
    setTimeout(() => {
        rps(pic);
        switch(pic){
            case 0:
                playerPicture.style.background = 'url(./images/sc.png)';
                playerPicture.style.backgroundSize =  '65%';
                break;
            case 1:
                playerPicture.style.background = 'url(./images/pp.png)';
                playerPicture.style.backgroundSize =  '65%';
                break;
            case 2:
    
                playerPicture.style.background = 'url(./images/rk.png)';
                playerPicture.style.backgroundSize =  '60%';
                break;
        }
        playerPicture.style.transition = 'all 0.5s ease-in-out';
        playerPicture.style.transform = 'rotate(90deg)';
        playerPicture.style.backgroundRepeat =  'no-repeat';
        playerPicture.style.backgroundPosition = 'center';  
    }, 550);
  }

function opponentPic(pic){
        switch(pic){
            case 0:
                opponentPicture.style.background = 'url(./images/op_sc.png)';
                opponentPicture.style.backgroundSize =  '45%';
                break;
            case 1:
                opponentPicture.style.background = 'url(./images/op_pp.png)';
                opponentPicture.style.backgroundSize =  '66%';
                break;
            case 2:
    
                opponentPicture.style.background = 'url(./images/op_rk.png)';
                opponentPicture.style.backgroundSize =  '60%';
                break;
        }
        
        opponentPicture.style.transform = 'rotate(-90deg)';
        opponentPicture.style.backgroundRepeat =  'no-repeat';
        opponentPicture.style.backgroundPosition = 'center';  
}
  

function rps(choice){
    let result = 0;
    result = result+choice;
    let com = Math.floor(Math.random() * 3) + 1;
    if(com == 1){
        matchResult.textContent = 'tie';
        
    }else if(com == 2){
        matchResult.textContent = 'lose';

        opponentScore.textContent++;
        oScore++;
        result+= 2;
    }else if(com == 3){
        matchResult.textContent = 'win';
        
        playerScore.textContent++;
        pScore++;
        result++;
    }
    result = result%3;
    switch (result){
        case 0:
            opponentPic(0);
            break;
        case 1:
            opponentPic(1);
            break;
        case 2:
            opponentPic(2);
            break;
        }
        if(pScore == scoreGoal){
            gameResult.textContent = 'You Win!';
            gameResult.style.height = '10vh';
            newGameScreen.style.height = '64vh';
            newGameScreen.style.paddingBottom = '20vh';
            playButton.textContent = 'play again'
            pScore = 0, oScore = 0;
            scoreGoal = 0;
        }else if (oScore == scoreGoal){
            gameResult.textContent = 'You Lose!';
            gameResult.style.height = '10vh';
            newGameScreen.style.height = '64vh';
            newGameScreen.style.paddingBottom = '20vh';
            playButton.textContent = 'play again'
            pScore = 0, oScore = 0;
            scoreGoal = 0;
        }
    }
    