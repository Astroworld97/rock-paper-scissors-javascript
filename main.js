let playerChoice
let computerChoice
let winsLog = { //logs how many wins there are for the player and for the computer
    playerWins: 0,
    computerWins: 0
}

//for the window line that says 'You have x wins and the computer has y wins.'
const winSummary = document.createElement('b')
winSummary.textContent = `You have ${winsLog.playerWins} wins and the computer has ${winsLog.computerWins}`
document.querySelector('#wins').appendChild(winSummary)

//line break
const br = document.createElement('br')
document.querySelector('#wins').appendChild(br)

//creates a button to increment player wins
let playerButton = document.createElement('button')
playerButton.innerHTML = 'Player';
playerButton.addEventListener('click', () => {
    playerWinsIncrement();
    updatePlayerButton(playerButton);
    winSummary.textContent = `You have ${winsLog.playerWins} wins and the computer has ${winsLog.computerWins}`
    console.log(winsLog.playerWins)
})
document.querySelector('#wins').appendChild(playerButton)

//creates a button to increment computer wins
let computerButton = document.createElement('button')
computerButton.innerHTML = 'Computer';
computerButton.addEventListener('click', () => {
    computerWinsIncrement();
    updateComputerButton(computerButton);
    winSummary.textContent = `You have ${winsLog.playerWins} wins and the computer has ${winsLog.computerWins}`
    console.log(winsLog.computerWins)
})
document.querySelector('#wins').appendChild(computerButton)

//modify state without worrying about DOM updates
let playerWinsIncrement = () => {
    winsLog.playerWins +=1
}

//modify state without worrying about DOM updates
let computerWinsIncrement = () => {
    winsLog.computerWins +=1
}

//actually take care of mutating the DOM
let updatePlayerButton = (button) =>{
    playerButton.innerText = winsLog.count;
}

//actually take care of mutating the DOM
let updateComputerButton = (button) =>{
    computerButton.innerText = winsLog.count;
}

//plays one round of the game
let play = function(playerChoice){
    if(playerChoice!==null){
        computerChoice = getComputerChoice()
        let retval = [playerChoice, computerChoice]
        if (playerChoice === computerChoice){ //tie
            retval.push(0)
        }else if(is_win(playerChoice, computerChoice)){ //player wins, computer loses
            retval.push(1)
        }else{ //player loses, computer wins
            retval.push(-1)
        }
        return retval
    }else{
        console.log('You need to make your play!')
    }
}

//adds the player choice text entry box (aka form)
document.querySelector('#player-choice-form').addEventListener('submit', function(e){
    e.preventDefault() //include this line if you don't want the page to refresh automatically
    //console.log(playerChoice)
    playerChoice = e.target.elements.playerChoix.value
    //console.log(playerChoice)
    e.target.elements.playerChoix.value = ''
})

//plays n rounds of the game
let playBestOf = function(n){
    //play against the computer until someone wins best of n games
    //to win, you must win ceil(n/2) games (i.e. 2/3, 3/5, 4/7)
    wins_necessary = Math.ceil(n / 2)
    while(winsLog.playerWins<wins_necessary && winsLog.computerWins<wins_necessary){
        arr = play()
        user = arr[0]
        computer = arr[1]
        result = arr[2]
        if(result === 0){
            console.log(`Tie. You and the computer have both chosen ${user}.`)
        }else if(result === 1){
            player_wins += 1
            console.log(`You chose ${user} and the computer chose ${computer}. You won!`)
        }else{
            computer_wins += 1
            console.log(`You chose ${user} and the computer chose ${computer}. You lost :(`)
        }
        if (player_wins === wins_necessary){
            console.log(`You have won the best of ${n} games! What a champ :D`)
            return
        }
        if(computer_wins === wins_necessary){
            console.log(`"Unfortunately, the computer has won the best of ${n} games. Better luck next time!"`)
            return
        }
    }
}

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

//main
// let ans = play()
// console.log(ans)



