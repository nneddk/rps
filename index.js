const playButton = document.getElementById('play-again-button');
const newGameScreen = document.getElementById('new-game');
playButton.onclick = function(){
    let scoreGoal = document.getElementById('goal-score');
    console.log(scoreGoal.value);
    newGameScreen.style.height = '0';
    newGameScreen.style.paddingBottom = '0';
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
rockButton.onclick = function(){
    rps(2);
}
paperButton.onclick = function(){
    rps(1);
}
scissorsButton.onclick = function(){
    rps(0);
}

function rps(choice){
    let result = 0;
    result = result+choice;
    let com = Math.floor(Math.random() * 3) + 1;
    if(com == 1){
        console.log('tie');
    }else if(com == 2){
        console.log('lose');
        result+= 2;
    }else if(com == 3){
        console.log('win');
        result++;
    }
    result = result%3;
    switch (result){
        case 0:
            console.log('scissors');
            break;
        case 1:
            console.log('paper');
            break;
        case 2:
            console.log('rock');
            break;
        }
    }
