let winsLog = { //logs how many wins there are for the player and for the computer
    playerWins: 0,
    computerWins: 0
}

//for the window line that says 'You have x wins and the computer has y wins.'
const winSummary = document.createElement('b')
winSummary.textContent = `You have ${winsLog.playerWins} wins and the computer has ${winsLog.computerWins}`
document.querySelector('#wins').appendChild(winSummary)

//modify state without worrying about DOM updates
let playerWinsIncrement = () => {
    winsLog.playerWins +=1
}

//modify state without worrying about DOM updates
let computerWinsIncrement = function(){
    winsLog.computerWins +=1
}

let checkCorrectInput = function(playerChoice){
    if(playerChoice === 'r' || playerChoice === 's' || playerChoice === 'p'){
        return true
    }else{
        return false
    }
}

//plays one round of the game
let play = function(playerChoice){
    if(checkCorrectInput(playerChoice)){
        computerChoice = getComputerChoice()
        if (playerChoice === computerChoice){ //tie
            return 0
        }else if(is_win(playerChoice, computerChoice)){ //player wins, computer loses
            return 1
        }else{ //player loses, computer wins
            return -1
        }
    } else{
        return -100
    } 
}

//adds the player choice text entry box (aka form)
document.querySelector('#player-choice-form').addEventListener('submit', function(e){
    e.preventDefault() //include this line if you don't want the page to refresh automatically
    //console.log(playerChoice)
    let p = e.target.elements.playerChoix.value
    let result = play(p)
    const a = document.getElementById("announcement");
    if(result===0){ //tie
        a.textContent = "You and the computer chose the same move. It's a tie!"
    }else if(result===1){ //player wins, computer loses
        playerWinsIncrement()
        a.textContent = "You won! Congratulations"
        winSummary.textContent = `You have ${winsLog.playerWins} wins and the computer has ${winsLog.computerWins}`
    }else if(result===-100){
        a.textContent = "Sorry, you can only enter 'r' for rock, 'p' for paper, or 's' for scissors."
    }else{ //computer wins, player loses
        computerWinsIncrement()
        a.textContent = "Sorry, you lost and the computer won"
        winSummary.textContent = `You have ${winsLog.playerWins} wins and the computer has ${winsLog.computerWins}`
    }
    e.target.elements.playerChoix.value = ''
})

// return true if the player beats the opponent
// winning conditions: r>s, s>p, p>r
let is_win = function(player, opponent){
    if ((player === "r" && opponent === "s") || (player === "s" && opponent === "p") || (player === "p" && opponent === "r")){
        return true
    }
    return false
}

//gets a random choice for the computer
let getComputerChoice = function(){
    const choices = ['r', 'p', 's']
    const num = getRandomInt(3)
    return choices[num]
}

//gets a random int so it can be used by the getComputerChoice fxn
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}