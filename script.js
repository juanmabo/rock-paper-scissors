function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function convertirSeleccion(selection) {
    selection = selection.toLowerCase();

    switch (selection) {
        case 'rock':
            return 1;
        case 'paper':
            return 2;
        case 'scissors':
            return 3;
        default:
            return null;
    }
}




function playRound() {
    let playerSelection = convertirSeleccion(prompt("Put your choice (Rock, Paper or Scissors):"));
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "It's tie. The computer choose the same.";
    } else if (playerSelection === 1 && computerSelection === 2) {
        return "You lost. Computer choose Paper"
    } else if (playerSelection === 1 && computerSelection === 3) {
        return "You won. Computer choose Scissors"
    } else if (playerSelection === 2 && computerSelection === 1) {
        return "You won. Computer choose Rock"
    } else if (playerSelection === 2 && computerSelection === 3) {
        return "You lost. Computer choose Scissors"
    } else if (playerSelection === 3 && computerSelection === 1) {
        return "You lost. Computer choose Rock"
    } else if (playerSelection === 3 && computerSelection === 2) {
        return "You won. Computer choose Paper"
    } else {
        return "Wrong prompt. Try again"
    }
}

function game(){
    let input = prompt("Put your choice (Rock, Paper or Scissors):");

}

console.log(playRound());