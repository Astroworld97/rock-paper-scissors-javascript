let play = function(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors'\n", name => {
        //console.log(`Choice is: ${name}!`);
        readline.close();
      });
}

play()