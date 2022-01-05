//const { realpath } = require('fs')
//let playerChoiceArray = []

let play = function(){
    let playerChoice = prompt("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors'\n")
    //playerChoice = playerChoiceArray[0]
    computerChoice = getComputerChoice()
    let retval = [playerChoice, computerChoice]
    if (playerChoice === computerChoice){
        retval.push(0)
    }else if(is_win(playerChoice, computerChoice)){
        retval.push(1)
    }else{
        retval.push(-1)
    }
    return retval
}

let playBestOf = function(n){
    //play against the computer until someone wins best of n games
    //to win, you must win ceil(n/2) games (i.e. 2/3, 3/5, 4/7)
    player_wins = 0
    computer_wins = 0
    wins_necessary = Math.ceil(n / 2)
    while(player_wins<wins_necessary && computer_wins<wins_necessary){
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

let is_win = function(player, opponent){
    // return true if the player beats the opponent
    // winning conditions: r>s, s>p, p>r
    if ((player === "r" && opponent === "s") || (player === "s" && opponent === "p") || (player === "p" && opponent === "r")){
        return true
    }
    return false
}

// let input = function(){
//     const readline = require('readline')
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     rl.question("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors'\n", (choice) => {
//     playerChoiceArray = []
//     playerChoiceArray.push(choice)
//     rl.close()
//     });
// }

let getComputerChoice = function(){
    const choices = ['r', 'p', 's']
    const num = getRandomInt(3)
    return choices[num]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let hello = function(){
    console.log(playerChoiceArray[0])
}

//main
//playBestOf(5)

//input test
//input()
play()



